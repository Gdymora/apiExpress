import { Request, Response } from "express";

import { postgresDataSource } from "../../connection/connection"
import { HTTP400Error, HTTP401Error } from "../../utils/httpErrors";
import { FilmCategory } from "../../entity/filmCategory.entity";

const itemsRepository = postgresDataSource.getRepository(FilmCategory);

const path = "/api/film-category";
const id = "category_id";
type Items = FilmCategory;

export default [

  {
    path: `${path}/all`,
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const results = await itemsRepository.find({ relations: ['category', 'film']})
        res.json(results)
      }
    ]
  } 
];