import { Router } from 'express';

import { projectAppRouter } from './modules/project/router';

const appRouter = Router();
projectAppRouter(appRouter);

export { appRouter };