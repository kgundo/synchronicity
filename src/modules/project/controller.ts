import { Response, Request } from 'express';
import { IProjectModel } from './interface';
import { SuccessResponse } from '../common/response';
import { logSystemError } from '../common/logger';

export async function getProject(req: Request, res: Response) {
    try {
        const { params } = req;
        const project = {} as IProjectModel;
        return res.json(new SuccessResponse(project));
    } catch (error) {
        logSystemError(res, error, 'getProject');
    }
}