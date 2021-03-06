const pw =  require("./pw");

module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: pw,
  DB: "homepage",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};