import { Router } from 'express';
import Sequelize from 'sequelize';

export default ({ db }) => {
  const api = Router();

  const makeVideoCopy = (video: Object, isFavorite: boolean): Object => {
    const copy = {};
    copy.id = video.id;
    copy.tvid = video.tvid;
    copy.title = video.title;
    copy.description = video.description;
    copy.created_at = video.created_at;
    copy.updated_at = video.updated_at;
    copy.is_favorite = isFavorite;
    return copy;
  };

  api.get('/', async (req, res) => {
    const videos = await db.video.findAll({});
    const userId = req.headers['user-id'];
    if (!userId) {
      const v = videos.map((video) => {
        const copy = makeVideoCopy(video, false);
        return copy;
      });
      res.json({ videos: v });
      return;
    }
    const isFavorites = await db.users_videos.findAll({ where: { user_id: userId } });
    const v = videos.map((video) => {
      const isFavorite = isFavorites.filter(a => a.video_id === video.id).length > 0;
      const copy = makeVideoCopy(video, isFavorite);
      return copy;
    });
    res.json({ videos: v });
  });

  api.post('/', async (req, res) => {
    const newVideo = await db.video.create({ title: 'Chinese idle', tvid: 'h0026v0vvl6' });
    res.json(newVideo);
  });

  api.get('/favorites', async (req, res) => {
    const userId = req.headers['user-id'];
    if (!userId) {
      res.json({ videos: [] });
      return;
    }

    const fav = await db.users_videos.findAll({ where: { user_id: userId } });
    const videos = await db.video.findAll({ where: { [Sequelize.Op.or]: [{ id: fav.map(f => f.video_id) }] } });
    const copies = videos.map(v => makeVideoCopy(v, true));
    res.json({ videos: copies });
  });

  api.post('/favorites/:videoId', async (req, res) => {
    const userId = req.headers['user-id'];
    if (!userId) {
      // TODO: 401 error
      res.json({});
      return;
    }

    const { videoId } = req.params;
    const fav = await db.users_videos.findOrCreate({ where: { user_id: userId, video_id: videoId } });
    res.json({ video: fav[0] });
  });

  api.post('/favorites/:videoId/delete', async (req, res) => {
    const userId = req.headers['user-id'];
    if (!userId) {
      // TODO: 401 error
      res.json({});
      return;
    }

    const { videoId } = req.params;
    const favDestroyCount = await db.users_videos.destroy({ where: { user_id: userId, video_id: videoId } });
    const message = favDestroyCount > 0 ? 'successfully remove favorite' : 'failed to remove favorite';
    res.json({ message });
  });

  api.get('/:videoId', async (req, res) => {
    const { videoId } = req.params;
    const userId = req.headers['user-id'];
    const video = await db.video.find({ where: { id: videoId } });

    let isFavorite = false;
    if (userId) {
      const isFavoriteArray = await db.users_videos.findAll({ where: { user_id: userId, video_id: videoId } });
      isFavorite = isFavoriteArray.length > 0;
    }
    const copy = makeVideoCopy(video, isFavorite);
    res.json(copy);
  });

  return api;
};
