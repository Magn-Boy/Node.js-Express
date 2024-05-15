const { Router } = require('express');

const User = require('./user.model.js');
const usersService = require('./user.service.js');

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

module.exports = router;
