import { Request, Response } from "express";
import { ProductService } from "../Services/Product.Service";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req: Request, res: Response) {
    await this.productService.createProduct(req.body);

    return res.status(201).send();
  }

  async getProductDetails(req: Request, res: Response) {
    let productId: number = +req.params.productId;

    return res
      .status(200)
      .send(await this.productService.getProductDetails(productId));
  }

  async deleteProduct(req: Request, res: Response) {
    let productId: number = +req.params.productId;
    await this.productService.deleteProduct(productId);
    return res.status(204).send();
  }

  async updateProduct(req: Request, res: Response) {
    let productId: number = +req.params.productId;
    await this.productService.updateProduct(productId, req.body);
    return res.status(204).send();
  }
}
