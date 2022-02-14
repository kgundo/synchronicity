import express, { Express, NextFunction, Request, Response } from 'express';

import { appRouter } from './router';

const app: Express = express();
app.set('port', process.env.PORT || 3000);

app.use('/api/app/v1', appRouter);

export { app };