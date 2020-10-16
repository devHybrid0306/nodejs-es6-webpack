import { Router } from 'express';
import users from './users';
import videos from './videos';

export default ({ db }) => {
  const api = Router();

  api.use('/users', users({ db }));

  // mount the videos resource
  api.use('/videos', videos({ db }));

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ test: 'aaa' });
  });

  return api;
};
