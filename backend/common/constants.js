import { version, name, description } from './../../package.json';
import path from 'path';

export const PORT = Number(process.env.PORT) || 8080;
export const IS_DEV = process.env.NODE_ENV !== 'production';
export const APP_VERSION = version;
export const APP_NAME = name;
export const APP_DESCRIPTION = description;

export const ROOT_PATH = path.join(
    __dirname,
    // Jest runs in the non-built locations
    .../* istanbul ignore next */ (IS_TEST ? ['..', '..'] : ['..'])
);

export const TIME = {
    MILLISECOND: 1,
    SECOND: MILLISECOND * 1000,
    MINUTE: SECOND * 60,
    HOUR: MINUTE * 60,
    DAY: HOUR * 24,
    WEEK :DAY * 7,
    MONTH: DAY * 30,
    YEAR: MONTH * 12,
}