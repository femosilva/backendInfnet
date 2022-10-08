import { Request, Response } from "express";
import User from "../database/schemas/User";
class UserController {

  async create(request: Request, response: Response) {
    const { name, lastName, email } = request.body;
    try {
      const user = await User.create({
        name,
        lastName,
        email,
      });
      return response.json(user);
    } catch (error) {
      return response.status(500).send({
        error: "Falha ao registrar",
        message: error,
      });
    }
  }

  async find(request: Request, response: Response) {
    try {
      const users = await User.find();
      return response.json(users);
    } catch (error) {
      return response.status(500).send({
        error: "Falha ao buscar",
        message: error,
      });
    }
  }

  async findById(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const user = await User.findById(id);
      return response.json(user);
    } catch (error) {
      return response.status(500).send({
        error: "Usuario não encontrado",
        message: error,
      });
    }
  }
}

export default new UserController();
