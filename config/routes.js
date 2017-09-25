const router = require('express').Router();
const lists = require('../controllers/lists');

module.exports = router;

// router.get('/lists/my-first-list', sessions.start);

router.route('/lists')
  .get(lists.index)
  .post(lists.create);

router.route('/lists/:id')
  .get(lists.show)
  .put(lists.update)
  .delete(lists.delete);

// router.route('/lists/:id/share')
//   .put(lists.share);

router.route('/lists/:id/entries')
  .put(lists.entriesCreate);

router.route('/lists/:id/entries/:entryId')
  .delete(lists.entriesDelete)
  .put(lists.entriesUpdate);

router.route('/lists/:id/entries/:entryId/comments')
  .put(lists.commentsCreate);

router.route('/lists/:id/entries/:entryId/comments/:commentId')
  .delete(lists.commentsDelete);

// router.route('/register')

// router.route('/login')

// router.all('/*', (req, res) => res.notFound());

module.exports = router;
