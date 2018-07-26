var express = require('express');
var router = express.Router();

const messages = [
  { text: "bye!!", owner: "AV" },
  { text: "bark", owner: "dog" }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/messages', function(req, res, next) {
  res.json(messages);
});

module.exports = router;
