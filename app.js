import express from 'express';
import bodyParser from 'body-parser';
import middleware from './src/middleware';
import v1 from './src/v1';
/* eslint-disable */
import { getModels } from './models';
import config from './config/config.json';

const env = process.env.NODE_ENV || 'development';
const conf = config[env];

const app = express();
const db = getModels(conf);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

// internal middleware
app.use(middleware({ db }));

app.use('/api/v1', v1({ db }));

const PORT = conf.port || 3389;

app.listen(PORT);
