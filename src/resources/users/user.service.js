const userRepo = require('./user.memory.repository.js');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
