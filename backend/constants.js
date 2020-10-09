import { version, name, description } from './../package.json';

export const PORT = Number(process.env.PORT) || 8095;
export const isDev = process.env.NODE_ENV !== 'production';
export const APP_VERSION = version;
export const APP_NAME = name;
export const APP_DESCRIPTION = description;