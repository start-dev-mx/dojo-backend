import { Request, Response } from "express";
import { UserService } from "../Services/User.Service";
import { ErrorHandler } from "../Utils/Error.Handler";

export class UserController {
  //controlador es un conjunto de metodos que reciben peticiones, y devuelven respuestas

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response) {
    await this.userService.createUser(req.body);
    return res.status(201).send();
  }

  async getUserDetails(req: Request, res: Response) {
    let userId: number = +req.params.userId;

    return res.status(200).send(await this.userService.getUserDetails(userId));
  }

  async deleteUser(req: Request, res: Response) {
    let userId: number = +req.params.userId;
    await this.userService.deleteUser(userId);
    return res.status(204).send();
  }

  async updateUser(req: Request, res: Response) {
    let userId: number = +req.params.userId;
    await this.userService.updateUser(userId, req.body);
    return res.status(204).send();
  }

  // 201 crear
  // 401 no autorizadp
  // 403 token no valido
}

//se encarga de recibir la peticion del navegador, y devolver la respuesta
