import { Request, Response } from "express";
import { postgresDataSourceItems } from "../connection/connection";
import { Items } from "../entity/items.entity";
import { HTTP401Error } from "../utils/httpErrors";
import { createClient } from 'redis';
//const redis = require('redis')
/*   const redisClient = createClient({
    url: process.env.REDIS_URL
});  
  redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});
redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
}); 
*/
const itemsRepository = postgresDataSourceItems.getRepository(Items); 

export const getUser = async function (req: Request, res: Response) {
    
    const results = await itemsRepository.find();
  /*   await redisClient.connect();
    await redisClient.set('key', 'value');
    const value = await redisClient.get('key'); 
    console.log(value)
    */

    
    if (results) {
        res.status(200).json({
            results
        })
    } else {
        new HTTP401Error();
    }
}