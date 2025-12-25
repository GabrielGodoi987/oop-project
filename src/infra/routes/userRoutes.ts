import { Router } from "express";
import { UserController } from "../controllers/UserController";
export function createUserRoutes(): Router {
  const router = Router();

  const useController = new UserController();

  router.get("/", (req, res) => {
    useController.getAllUsers(req, res);
  });

  router.post("/", (req, res) => {
    useController.createUser(req, res);
  });

  router.get("/:id", (req, res) => {
    const { id } = req.params;
    useController.getUserById(req, res);
  });

  router.put("/:id", (req, res) => {
    const { id } = req.params;
    useController.updateUserById(req, res);
  });

  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    useController.deleteUserById(req, res);
  });

  return router;
}
