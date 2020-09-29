import { ProductController } from "../Controllers/Product.Controller";
import { SaleController } from "../Controllers/Sale.Controller";
import { UserController } from "../Controllers/User.Controller";

export class Initializer {
  private userController: UserController;
  private productController: ProductController;
  private saleController: SaleController;

  constructor() {
    this.userController = new UserController();
    this.productController = new ProductController();
    this.saleController = new SaleController();
  }

  getController(prototype: string) {
    switch (prototype) {
      case UserController.name:
        return this.userController;
        break;
      case ProductController.name:
        return this.productController;
        break;
      case SaleController.name:
        return this.saleController;
        break;
      default:
        return null;
        break;
    }
  }
}
