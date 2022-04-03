import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import { postgresDataSource, postgresDataSourceItems } from "../connection/connection";

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

export const dataSorceInitialize = () => {
  postgresDataSourceItems.initialize().then(async () => {
    console.log("Inserting a new user into the database Items...")
    
  }).catch(error => console.log('Conect Error - ', error))
  postgresDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
  }).catch(error => console.log('Conect Error - ', error))
}
