export interface RouteInterface {
  url: string; // ventas/user
  method: string; // POST | GET | PUT | DELETE
  controller: any; //controlador user.controller
  target: string; // nombre del metodo del controller createUser
}
