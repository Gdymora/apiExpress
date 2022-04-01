import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";

/* содержит промежуточное программное обеспечение, 
такое как cors, сжатие и настройку для разбора тела. 
ПО для ведения журналов, безопасности, кэширования  */

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};