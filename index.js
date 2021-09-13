if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
app.use(express.json());

const Conn = require("./models/conn/conn");

Conn(
  process.env.DB_URL,
  process.env.DB_USER,
  process.env.DB_PASS,
  process.env.DB_DATA
);

const taskRoutes = require("./routers/tasks.routes");
app.use("/tasks", taskRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.info("Servidor rodando...");
});
