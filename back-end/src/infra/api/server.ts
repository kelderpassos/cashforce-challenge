import App from './app';
import 'dotenv/config';

const { DB_PORT } = process.env;

new App().start(DB_PORT || Number(DB_PORT));
