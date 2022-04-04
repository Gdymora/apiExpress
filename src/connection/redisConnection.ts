import { createClient } from 'redis';

export const redisConnection = () => {

    const redisClient = createClient({
        url: process.env.URL_REDIS 
    });
    redisClient.on('error', function (err) {
        console.log('Could not establish a connection with redis. ' + err);
        if (err) {
            throw err;
        }

    });
    redisClient.on('connect', function (err) {
        console.log('Connected to redis successfully');
        if (err) {
            throw err;
        }
    });
    return redisClient;
}

