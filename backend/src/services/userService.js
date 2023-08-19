const userRepository = require('../repositories/UserRepository');
const encrypt = require('../utils/security');


require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
const create = async (userParam) => {
    try {
    const { name, telephone, password, email } = userParam;
    const hashpass = encrypt(password);

    const userData = {
      name: name,
      telephone: telephone,
      password:hashpass,
      email: email
    }
    user = await userRepository.createUser(userData);
    return {
      statusCode: 201,
      data: user
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error
    }
  }
}

module.exports = {
  create
};
