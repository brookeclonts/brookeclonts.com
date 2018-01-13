import path from 'path'; 
import express from 'express'; 
import cors from 'cors';
import router from './router';
import api from './api';
import bodyParser from 'body-parser';

const app = express();
const assets = express.static(path.join(__dirname, '../'));
app.use(cors());
app.use(assets);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);
app.get('*', router);

export default app;