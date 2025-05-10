import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import logger from "./middlewares/logger.middleware.js";
import { ResponseHandler } from "./utils/response_handler.js";
import router from "./routes.js";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url); // 🔹 Lấy đường dẫn file hiện tại
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
/*
config static files
example: http://localhost:3001/images/services/service-1.jpg
*/
app.use("/images", express.static(path.join(__dirname, "./uploads")));
app.use(express.json());

app.use(logger);
app.use(
  morgan("common", {
    stream: fs.createWriteStream("./access.log", { flags: "a" }),
  })
);
app.use(morgan("dev"));

// routes
app.use("/api", router);

// default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Beauty Guide API" });
});

// Not found route
app.get("*", function (req, res) {
  return ResponseHandler.responseError(res, null, "Resource not found", 404);
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
