var config = {
  bcrypt: {
    saltRounds: 10
  },
  admin_pass: "password",
  admin_email: "admin@flatlogic.com",
  secret_key: "HUEyqESqgQ1yTwzVlO6wprC9Kf1J1xuA",
  remote: 'https://flatlogic-node-backend.herokuapp.com',
  port: process.env.NODE_ENV === "production" ? "" : "8080",
  hostUI: process.env.NODE_ENV === "production" ? "https://demo.flatlogic.com" : "http://localhost",
  portUI: process.env.NODE_ENV === "production" ? "" : "3000",
  google: {
    clientId: "[INSERT HERE]",
    clientSecret: "[INSERT HERE]"
  },
  microsoft: {
    clientId: "[INSERT HERE]",
    clientSecret: "[INSERT HERE]"
  }
};

config.host = process.env.NODE_ENV === "production" ? config.remote : "http://localhost";
config.apiUrl = `${config.host}${config.port ? `:${config.port}` : ``}`;

module.exports = config;
