const User = require('../entities/user');

const createUser = async (user) => {
  return await User.create(user);
}

module.exports = {
  createUser
}
