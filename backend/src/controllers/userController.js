const userService = require('../services/userService');

const create = async (req, res) => {
  const user = req.body;
  const response = await userService.create(user);
  return res.status(response.statusCode).json(response.data);
}

module.exports = {
  create
};
