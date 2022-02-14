import { HttpStatus } from './constants';

const { VERSION: version = '' } = process.env;

export interface IErrorResponse {
    id?: number,
    index?: number,
    key: string,
    errorCode: number,
    message: string,
}

export class SuccessResponse {
    constructor(data = {}) {

        return {
            code: HttpStatus.OK,
            message: 'Success',
            data,
            version,
        };
    }
}
export class ErrorResponse {
    constructor(code = HttpStatus.INTERNAL_SERVER_ERROR, message = '', errors: IErrorResponse[] = []) {
        return {
            code,
            message,
            errors,
            version,
        };
    }
}