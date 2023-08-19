const app = require('./app');

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const port = process.env.PORT;

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api rodando na porta http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(port);
