import Joi from 'joi';

export enum HttpStatus {
    // CONTINUE = 100,
    // SWITCHING_PROTOCOLS = 101,
    // PROCESSING = 102,
    // EARLYHINTS = 103,
    OK = 200,
    // CREATED = 201,
    // ACCEPTED = 202,
    // NON_AUTHORITATIVE_INFORMATION = 203,
    // NO_CONTENT = 204,
    // RESET_CONTENT = 205,
    // PARTIAL_CONTENT = 206,
    // AMBIGUOUS = 300,
    // MOVED_PERMANENTLY = 301,
    // FOUND = 302,
    // SEE_OTHER = 303,
    // NOT_MODIFIED = 304,
    // TEMPORARY_REDIRECT = 307,
    // PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    INVALID_USERNAME_OR_PASSWORD = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    // METHOD_NOT_ALLOWED = 405,
    // NOT_ACCEPTABLE = 406,
    // PROXY_AUTHENTICATION_REQUIRED = 407,
    // REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    // GONE = 410,
    // LENGTH_REQUIRED = 411,
    // PRECONDITION_FAILED = 412,
    // PAYLOAD_TOO_LARGE = 413,
    // URI_TOO_LONG = 414,
    // UNSUPPORTED_MEDIA_TYPE = 415,
    // REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    // EXPECTATION_FAILED = 417,
    // I_AM_A_TEAPOT = 418,
    // MISDIRECTED = 421,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    // FAILED_DEPENDENCY = 424,
    // TOO_MANY_REQUESTS = 429,
    ERROR_CODE_EXIST_OTHER_ACTIVE_USER = 437,
    PLATFORM_ERROR = 442,
    ITEM_NOT_FOUND = 444,
    ITEM_ALREADY_EXIST = 445,
    OFFICE_LOCKED = 452,
    INTERNAL_SERVER_ERROR = 500,
    // NOT_IMPLEMENTED = 501,
    // BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    // GATEWAY_TIMEOUT = 504,
    // HTTP_VERSION_NOT_SUPPORTED = 505,
}

export const Regex = {
    PHONE: '^[0-9]{10,11}$',
    EMAIL: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,20}$',
    PASSWORD: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{9,16}$',
    FURIGANA: '^[\u30A0-\u30FF| |　]+$',
    FAX: '^[0-9]{8,15}$',
    NUMBER_ONLY: '^[0-9]+$',
    FILE_EXTENSION: '^.*\\.(jpg|jpeg|png|pdf|xlsx)$',
    USER_NAME: '^[\\S| |　]+$', // allow full-width and half-width character
};

export enum MaxLength {
    EMAIL = 250,
    PASSWORD = 16,
    INPUT_TEXT = 255,
    TEXTAREA = 2000,
    POSTAL_CODE = 7,
    MT_CODE = 30,
    USER_FULL_NAME = 50,
    USER_FURIGANA_NAME = 50,
    USER_DEPARTMENT = 100,
    USER_REMARK = 500,
}

export const TIMEZONE_DEFAULT = '+09:00';
export const TIMEZONE_NAME_DEFAULT = 'Asia/Tokyo';
export const TIMEZONE_HEADER = 'x-timezone';
export const TIMEZONE_NAME_HEADER = 'x-timezone-name';

export enum DateFormats {
    HYPHEN = 'YYYY-MM-DD',
    SLASH = 'YYYY/MM/DD',
    SHORT = 'YYYYMMDD',
}

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const DATE_TIME_UTC_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

export enum DateUnspecifiedFormats {
    DATE_TIME_FORMAT = 'YYYY-MM-DD HH:00:00',
    DATE_TIME_UTC_FORMAT = 'YYYY-MM-DDTHH:00:00.000Z',
}

export enum OrderDirection {
    ASC = 'asc',
    DESC = 'desc',
}

export const DEFAULT_LIST_QUERY = {
    PAGE: 1,
    LIMIT: 10,
    ORDER_DIRECTION: OrderDirection.DESC,
    ORDER_BY: 'createdAt',
    START_DATE: '1970-01-01 00:00:00'
};

export enum FilePath {
    ATTACHMENT = 'attachment'
}

export const DEFAULT_LIMIT_FOR_PAGINATION = 10;

export const DEFAULT_LIMIT_FOR_GET_ALL = 1000;

export enum SearchType {
    STRICT = 'strict',
    NEIGHBOR = 'neighbor',
    ALL = 'all'
}

export const MinMaxValue = {
    MIN_UNSIGNED_INTEGER: 0,
    MIN_ID: 1,
    MIN_LIMIT: 1,
    MIN_PAGE: 1,
    MAX_PAGE: 10000,
    MAX_INTEGER: 4294967295,
    MAX_LIMIT: 1000,
    MIN_DATE: '1970-01-01 00:00:00',
    MAX_DATE: '9999-01-01 00:00:00',
    MAX_OFFICE_FILE_COUNT: 6,
    MIN_ARRAY_LENGTH: 1,
};

export const DEFAULT_COMPANY_NAME = 'Company name';

export const WEEK_DAYS_JP = ['月', '火', '水', '木', '金', '土', '日'];

export enum TableName {
    AVAILABLE_VEHICLES = 'available_vehicles',
    PROJECTS = 'projects'
}

export const ES_PRECISION_THRESHOLD = 40000;
export const ES_MAX_TOP_HITS = 100;
export const ES_MAX_WINDOW_RESULT = 10000;

export const idParamSchema = Joi.object().keys({
    id: Joi.number().integer().min(MinMaxValue.MIN_ID).max(MinMaxValue.MAX_INTEGER).required(),
});

export enum SyncESAction {
    INSERT = 'insert',
    BULK_INSERT = 'bulk_insert',
    UPDATE = 'update',
    BULK_UPDATE = 'bulk_update',
    DELETE = 'delete',
    BULK_DELETE = 'bulk_delete',
}

export const SYNC_LIMIT_PER_REQUEST = 100;

export const AI_MATCHING_API_URL = process.env.AI_MATCHING_API_URL || '';

export enum SupportLanguage {
    EN = 'en',
    JA = 'ja',
}

export const ACCEPT_LANGUAGE_HEADER = 'accept-language';
