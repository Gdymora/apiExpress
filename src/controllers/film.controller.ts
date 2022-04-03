import { Request, Response } from "express";
import { postgresDataSource } from "../connection/connection";
import { HTTP401Error, HTTP404Error } from "../utils/httpErrors";
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
    let results;
    let cashename = "the data from the cache database was not used";

    try {
        if (myCache.has(searchTerm)) {
            cashename = "Node-cashe";
            results = myCache.get(searchTerm);
        } else if (setKeyReplyRedis) {
            results = JSON.parse(setKeyReplyRedis);
            cashename = "Redis-cashe";
        } else {
            const resultDb = await itemsRepository.findOneBy({
                title: req.params.title
            })
            if (resultDb) {
                results = resultDb
                await redisClient.setEx(searchTerm, Number(process.env.EXPIRE_TIME_REDIS), JSON.stringify(results));
                myCache.set(searchTerm, results);
            } else {
                new HTTP404Error();
            }
            console.log("base", setKeyReplyRedis)
        }

        await redisClient.disconnect();
        res.send(`
           <h4>${cashename}</h4>
           <pre style="font-family: Courier;background: #f4f4f4;border: solid 1px #e1e1e1;float: left;width: auto;">
              ${JSON.stringify(results, null, ' ').replace('[', '').replace(']', '')}
           </pre>`);

        console.log(myCache.getStats());

    } catch (err: any) {
        console.log(45)
        res.status(500).send({ message: err.message });
    }

}

/* 
    const searchTerm = req.query.search; 
    
    Статистика
myCache.getStats()*/