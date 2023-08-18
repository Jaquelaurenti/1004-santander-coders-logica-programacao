const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const encrypt  = (password) => {
  return bcrypt.hashSync(password,salt);
}

module.exports = encrypt;
