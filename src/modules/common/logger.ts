import winston from 'winston';
import DailyRotateFile = require('winston-daily-rotate-file');
import { Response } from 'express';
import { HttpStatus } from './constants';
import { ErrorResponse } from './response';
import { v4 as uuidV4 } from 'uuid';

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
        }),
        new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
    ],
};

const apiAccessOptions: winston.LoggerOptions = {
    transports: [
        new DailyRotateFile({
            filename: 'logs/api_access_%DATE%.log',
            level: 'info',
            maxFiles: '14d',
        }),
    ],
};

const logger = winston.createLogger(options);

export const apiAccessLogger = winston.createLogger(apiAccessOptions);

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export function logSystemError(res: Response, error: unknown, functionName: string) {
    const errorId = `${Date.now()}-${uuidV4()}`;
    logger.error(`Error in ${functionName}: ${errorId} ${error instanceof Error ? error.stack : JSON.stringify(error)}`);
    return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, `SYSTEM_ERROR: ${errorId}`));
}

export function logPlatformError(res: Response, error: unknown, functionName: string) {
    const errorId = `${Date.now()}-${uuidV4()}`;
    logger.error(`An error occurred at platform server ${functionName}: ${errorId} ${error instanceof Error ? error.stack : JSON.stringify(error)}`);
    return res
        .status(HttpStatus.PLATFORM_ERROR)
        .json(new ErrorResponse(HttpStatus.PLATFORM_ERROR, `SYSTEM_ERROR: ${errorId}`));
}

export default logger;