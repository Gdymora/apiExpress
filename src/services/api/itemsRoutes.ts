import { Request, Response } from "express";
import { postgresDataSourceItems } from "../../connection/connection"
import {  HTTP401Error } from "../../utils/httpErrors";
import { Items } from "../../entity/items.entity";
import { getUser } from "../../controllers/category.controller";

//const usersRepository = postgresDataSource.getRepository(Items);

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      let err = new HTTP401Error();
      console.log("err", err.name);
      res.status(401);
      res.send('Unauthorized');

      throw err;
    }
  },
  {
    path: "/api",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        res.send("Welcome to API")
      }
    ]
  },
  {
    path: "/api/item",
    method: "get",
    handler: [
       getUser     
    ]
  },
  {
    path: "/api/item/:id",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const results = await postgresDataSourceItems.getRepository(Items).findOneBy({
          id: Number(req.params.id),
        })
        res.send(results)
      }
    ]
  },
  {
    path: "/api/item",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        const user = await postgresDataSourceItems.getRepository(Items).create(req.body)
        const results = await postgresDataSourceItems.getRepository(Items).save(user)
        res.send(results);
      }
    ]
  },
  {
    path: "/api/item/:id",
    method: "delete",
    handler: [
      async (req: Request, res: Response) => {
        const results = await postgresDataSourceItems.getRepository(Items).delete(req.params.id)
        res.send(results)
      }
    ]
  },
  {
    path: "/api/item/:id",
    method: "put",
    handler: [
      async (req: Request, res: Response) => {
        const user = await postgresDataSourceItems.getRepository(Items).findOneBy({
          id: Number(req.params.id),
        })
        postgresDataSourceItems.getRepository(Items).merge(user as Items, req.body)
        const results = await postgresDataSourceItems.getRepository(Items).save(user as Items)
        res.send(results)
      }
    ]
  }
];