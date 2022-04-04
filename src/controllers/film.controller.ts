import { Request, Response } from "express";
import { postgresDataSource } from "../connection/connection";
import { redisConnection } from "../connection/redisConnection";
import { Film } from "../entity/film.entity";
import NodeCache from 'node-cache';

const itemsRepository = postgresDataSource.getRepository(Film);
const myCache = new NodeCache({ stdTTL: Number(process.env.STD_TTL_NODE_CASHE) });
const redisClient = redisConnection();

export const getFilm = async function (req: Request, res: Response) {
    await redisClient.connect();

    const searchTerm = req.params.title;
    const setKeyReplyRedis = await redisClient.get(searchTerm);

    if (myCache.has(searchTerm)) {
        sendResult(res, myCache.get(searchTerm),  "Node-cashe");
    } else if (setKeyReplyRedis) {
        sendResult(res, JSON.parse(setKeyReplyRedis), "Redis-cashe"); 
    } else {
            const resultDb = await itemsRepository.findOneBy({
                title: req.params.title
            })
            if (resultDb) {                
                await redisClient.setEx(searchTerm, Number(process.env.EXPIRE_TIME_REDIS), JSON.stringify(resultDb));
                myCache.set(searchTerm, resultDb);
                sendResult(res, resultDb, "the data from the cache database was not used");
            } else {                
                res.status(404).send({ message: "there is no data on this request" });
            }
    }

    await redisClient.disconnect();
}

function sendResult(res: Response, results: any, cashename?: string) {
        res.send(`
           <h4>${cashename}</h4>
           <pre style="font-family: Courier;background: #f4f4f4;border: solid 1px #e1e1e1;float: left;width: auto;">
              ${JSON.stringify(results, null, ' ').replace('[', '').replace(']', '')}
           </pre>`);   
}