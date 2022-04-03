import { Request, Response } from "express";
import { postgresDataSourceItems } from "../connection/connection";
import { Items } from "../entity/items.entity";
import { HTTP401Error } from "../utils/httpErrors";
import { createClient } from 'redis';

/* содержит промежуточное программное обеспечение, 
такое как cors, сжатие и настройку для разбора тела. 
ПО для ведения журналов, безопасности, кэширования  */
const client = createClient();
// echo redis errors to the console


const itemsRepository = postgresDataSourceItems.getRepository(Items);

export const getUser = async function (req: Request, res: Response) {
   await client.connect();
    const results = await itemsRepository.find();
   // client.setex(searchTerm, 600, JSON.stringify(results));
    if (results) {
        res.status(200).json({
            results
        })
    } else {
        new HTTP401Error();
    }
}