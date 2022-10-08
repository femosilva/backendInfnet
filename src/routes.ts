import { Router } from "express";
import UserController from "./controller/UserController";

const routes = Router();

routes.post("/user", UserController.create);
routes.get("/users", UserController.find);
routes.get("/user/:id", UserController.findById);

export default routes;