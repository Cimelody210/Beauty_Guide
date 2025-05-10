import { Router } from "express";
import UserController from "./controllers/user.controller.js";
import ServiceController from "./controllers/service.controller.js";
import PostController from "./controllers/post.controller.js";
import DashboardController from "./controllers/dashboard.controller.js";

const router = Router();
// authentication
router.post("/login", UserController.login);
router.post("/register", UserController.register);
// services
router.get("/services", ServiceController.services);
router.get("/services/:id", ServiceController.serviceDetail);
router.post("/services/:id/comments", ServiceController.createComment);
// posts
router.get("/posts", PostController.posts);
router.get("/posts/:id", PostController.postDetail);
// dashboard
router.get("/dashboard", DashboardController.index);
// users
router.get("/users", UserController.users);

export default router;
