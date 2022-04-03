import { createClient } from 'redis';
import { HTTP503Error } from '../utils/httpErrors';

export const redisConnection = () => {

    const redisClient = createClient({
        url: process.env.URL_REDIS
    });
    redisClient.on('error', function (err) {
        console.log('Could not establish a connection with redis. ' + err);
        if (err) {
            new HTTP503Error();
            throw err;
        }

    });
    redisClient.on('connect', function (err) {
        console.log('Connected to redis successfully');
        if (err) {
            new HTTP503Error();
            throw err;
        }
    });
    return redisClient;
}

