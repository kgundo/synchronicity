import { Router } from 'express';
import {
    getProject,
} from './controller';

export const projectAppRouter = (router: Router) => {
    router.get('/project/:id',
        getProject,
    );
};
