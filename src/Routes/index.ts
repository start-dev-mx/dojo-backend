import { RouteInterface } from "../Models/Interfaces/Route.Interface";
import { UserRoutes } from "./User.Routes";
import * as _ from "lodash";
import { Initializer } from "../Initializer/Initializer";
import { ProductRoutes } from "./Product.Routes";
import { SaleRoutes } from "./Sale.Routes";

let init: Initializer = new Initializer();
export const RoutesImported: Array<Array<RouteInterface>> = [
  UserRoutes,
  ProductRoutes,
  SaleRoutes,
];

export const RoutestoExpress = _.flattenDepth(RoutesImported, 2).map(
  (route) => {
    route.controller = init.getController(route.controller.name);
    return route;
  }
);
