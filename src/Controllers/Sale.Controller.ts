import { Request, Response } from "express";
import { SaleService } from "../Services/Sale.Service";

export class SaleController {
  private saleService: SaleService;

  constructor() {
    this.saleService = new SaleService();
  }

  async createSale(req: Request, res: Response) {
    await this.saleService.createSale(req.body);
    return res.status(201).send();
  }
}
