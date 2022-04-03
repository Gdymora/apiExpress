import { Request, Response } from "express";

import { postgresDataSource } from "../../connection/connection";
import { Category } from "../../entity/category.entity";

const itemsRepository = postgresDataSource.getRepository(Category);

const path = "/api/category";
const id = "category_id";
type Items = Category;

export default [

  {
    path: `${path}/all`,
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const results = await itemsRepository.find();
        res.json(results)
      }
    ]
  } ,
  {
    path: `${path}/:id`,
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const results = await itemsRepository.findOneBy({
          [id]: Number(req.params.id),
        })
        res.send(results)
      }
    ]
  },
  {
    path,
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        const item = await itemsRepository.create(req.body)
        const results = await itemsRepository.save(item)
        res.send(results);
      }
    ]
  },
  {
    path: "/api/item/:id",
    method: "delete",
    handler: [
      async (req: Request, res: Response) => {
        const results = await itemsRepository.delete(req.params.id)
        res.send(results)
      }
    ]
  } ,
  {
    path: "/api/item/:id",
    method: "put",
    handler: [
      async (req: Request, res: Response) => {
        const item = await itemsRepository.findOneBy({
          [id]: Number(req.params.id),
        })
        itemsRepository.merge(item as Items, req.body)
        const results = await itemsRepository.save(item as Items)
        res.send(results)
      }
    ]
  }  
];