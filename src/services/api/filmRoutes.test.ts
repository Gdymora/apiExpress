import express, { Router } from 'express';
import request from 'supertest';
import { applyMiddleware, applyRoutes } from '../../utils';
import axios from 'axios';
import middleware from '../../middleware';
import errorHandlers from '../../middleware/errorHandlers';
import filmRoutes from './filmRoutes';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.get.mockRejectedValue({ data: { features: [] } });
describe('routes', () => {
  let router: Router;

  beforeEach(() => {
    router = express();
    applyMiddleware(middleware, router);
    applyRoutes(filmRoutes, router);
    applyMiddleware(errorHandlers, router);
  });

  test('a valid string query', async () => {
    const response = await request(router).get('/film/ChamberItalian');
    expect(response.status).toEqual(200);
  });
  test('a non-existing api method', async () => {
    const response = await request(router).get('/film/api');
    expect(response.status).toEqual(404);
  });

  test('an empty string', async () => {
    const response = await request(router).get('/film/autineQ2');
    expect(response.status).toEqual(404);
  });
});