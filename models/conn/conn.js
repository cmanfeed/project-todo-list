const mongoose = require("mongoose");

function Conn(url, user, pass, database) {
  mongoose
    .connect(`${url}/${database}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Conn;
