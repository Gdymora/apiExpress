import "reflect-metadata";
import { Items } from "../entity/items.entity";
import { DataSource } from "typeorm";
import { join } from "path";

export const postgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "dvdrental",
  synchronize: false,
  entities: [`${join(__dirname, '../')}**/*.entity.{ts,js}`],
  migrations: [`${join(__dirname, '../../../../../../')}/migrations/**/*{.ts,.js}`],
  subscribers: [],
})

export const postgresDataSourceItems = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "test_db",
  synchronize: false,
  entities: [`${join(__dirname, '../')}**/*.entity.{ts,js}`],
  migrations: [`${join(__dirname, '../../../../../../')}/migrations/**/*{.ts,.js}`],
  subscribers: [],
})