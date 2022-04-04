import { Request, Response } from "express";

import { postgresDataSource } from "../../connection/connection";
import { getFilm } from "../../controllers/film.controller";
import { Film } from "../../entity/film.entity";

const itemsRepository = postgresDataSource.getRepository(Film);

const path = "/film";
const id = "film_id";

export default [

  {
    path: `${path}/all`,
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const results = await itemsRepository.find({ relations: ['language'] })
        res.json(results)
      }
    ]
  },
  {
    path: `${path}/:title`,
    method: "get",
    handler: [      
      getFilm     
    ]
  },
  {
    path: `${path}/id/:id`,
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
];