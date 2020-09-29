import { Application, Request, Response } from "express";
import express from "express";
import { RoutestoExpress } from "../Routes/index";
import { RouteInterface } from "../Models/Interfaces/Route.Interface";
import * as bp from "body-parser";
import { ErrorHandler } from "../Utils/Error.Handler";

export class App extends ErrorHandler {
  // instacia del servidor express

  public app: Application;

  constructor() {
    super();
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(bp.json());
    RoutestoExpress.forEach((route: RouteInterface) => {
      (this.app as Application)[route.method](
        route.url,
        async (req: Request, res: Response) => {
          try {
            await route.controller[route.target](req, res); //llamado del metodo del controller
          } catch (err) {
            this.parseError(err.message, res);
          }
        }
      );
    });
  }
}
