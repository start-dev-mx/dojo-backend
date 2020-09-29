import { Router } from "express";
import { SaleController } from "../Controllers/Sale.Controller";
import { RouteInterface } from "../Models/Interfaces/Route.Interface";

export const SaleRoutes: Array<RouteInterface> = [
  {
    url: "/ventas/venta",
    controller: SaleController,
    method: "post",
    target: "createSale",
  },
];
