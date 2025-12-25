import express from "express";
import { createUserRoutes } from "./infra/routes/userRoutes";

const app = express();

app.use(express.json());

app.use("/api/v1/users", createUserRoutes());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the OOP CRUD API!",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
