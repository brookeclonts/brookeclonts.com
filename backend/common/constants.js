import { version, name, description } from './../../package.json';
import path from 'path';

export const PORT = Number(process.env.PORT) || 8080;
export const IS_DEV = process.env.NODE_ENV !== 'production';
export const APP_VERSION = version;
export const APP_NAME = name;
export const APP_DESCRIPTION = description;
export const IS_TEST = process.env.NODE_ENV === 'test';

export const ROOT_PATH = path.join(
    __dirname,
    // Jest runs in the non-built locations
    .../* istanbul ignore next */ (IS_TEST ? ['..', '..'] : ['..'])
);

const MILLISECOND = 1;
const SECOND = MILLISECOND * 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
// Yeah 30 is about the average.
// Precision isn't that important here
const MONTH = DAY * 30;
const YEAR = MONTH * 12;

export const TIME = {
    MILLISECOND,
    SECOND,
    MINUTE,
    HOUR,
    DAY,
    WEEK,
    MONTH,
    YEAR,
};
  