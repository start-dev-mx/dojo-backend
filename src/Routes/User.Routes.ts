import { UserController } from "../Controllers/User.Controller";
import { RouteInterface } from "../Models/Interfaces/Route.Interface";

export const UserRoutes: Array<RouteInterface> = [
  //contenedor de rutas de contexto de usuarios
  {
    url: "/ventas/user", // url del servicio
    controller: UserController, //controlador
    method: "post", // POST para crear,PUT para actualizar mas de un campo
    //GET para obtener,DELETE para borrar,PATCH para actualizar estatus
    target: "createUser", // nombre del metodo controlador
  },

  {
    url: "/ventas/user/:userId",
    controller: UserController,
    method: "get",
    target: "getUserDetails",
  },

  {
    url: "/ventas/user/:userId",
    controller: UserController,
    method: "delete",
    target: "deleteUser",
  },

  {
    url: "/ventas/user/:userId",
    controller: UserController,
    method: "put",
    target: "updateUser",
  },
];
