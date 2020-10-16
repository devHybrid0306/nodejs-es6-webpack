import { Router } from 'express';

export default ({ db }) => {
  const api = Router();

  api.get('/', async (req, res) => {
    const users = db.user.findAll({});
    res.json(users);
  });

  api.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const u = await db.user.find({ where: { id: userId } });
    res.json(u);
  });

  api.post('/', async (req, res) => {
    const { name, sessionCode, avatarUrl } = req.body;
    const newUser: Array<any> = await db.user.findOrCreate({ where: { name, session_code: sessionCode } });
    const result = await newUser[0].update({ avatar_url: avatarUrl });
    res.json(result);
  });

  api.put('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { name } = req.body;
    const childBirthday = req.body.child_birthday;
    const avatarUrl = req.body.avatar_url;
    const user = await db.user.update({ name, child_birthday: childBirthday, avatar_url: avatarUrl }, { where: { id: userId } });
    const message = user[0] === 1 ? 'successfully updated' : 'failed to update';
    res.json({ message });
  });

  api.get('/destroy/:userId', async (req, res) => {
    const { userId } = req.params;

    // TODO: These executions should be in one transaction.
    const userDestroyCount = await db.user.destroy({ where: { id: userId } });
    await db.users_videos.destroy({ where: { user_id: userId } });

    const message = userDestroyCount > 0 ? 'successfully deleted' : 'failed to delete the user';
    res.json({ message });
  });

  return api;
};
