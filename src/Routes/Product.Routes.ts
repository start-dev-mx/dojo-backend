import { ProductController } from "../Controllers/Product.Controller";
import { RouteInterface } from "../Models/Interfaces/Route.Interface";

export const ProductRoutes: Array<RouteInterface> = [
  {
    url: "/ventas/product",
    controller: ProductController,
    method: "post",
    target: "createProduct",
  },

  {
    url: "/ventas/product/:productId",
    controller: ProductController,
    method: "get",
    target: "getProductDetails",
  },

  {
    url: "/ventas/product/:productId",
    controller: ProductController,
    method: "delete",
    target: "deleteProduct",
  },

  {
    url: "/ventas/product/:productId",
    controller: ProductController,
    method: "put",
    target: "updateProduct",
  },
];
