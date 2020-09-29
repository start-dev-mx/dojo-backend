import { Product } from "../Models/Entities/Product";
import { Sale } from "../Models/Entities/Sales";
import { User } from "../Models/Entities/User";
import { SaleForm } from "../Models/Interfaces/Sale.Form";
import { ProductRepository } from "../Repositories/Product.Repository";
import { SaleRepository } from "../Repositories/Sale.Repository";
import { UserRepository } from "../Repositories/User.Repository";
import { validateSale } from "../Utils/Validators";

export class SaleService {
  private saleRepository: SaleRepository;
  private userRepository: UserRepository;
  private productRepository: ProductRepository;
  constructor() {
    this.saleRepository = new SaleRepository();
    this.userRepository = new UserRepository();
    this.productRepository = new ProductRepository();
  }

  async createSale(saleForm: SaleForm) {
    validateSale(saleForm);
    let product: Product = await this.productRepository.getProductDetails(
      saleForm.productId
    );
    if (!product) throw Error("[404], el producto indicado no existe en la bd");

    let user: User = await this.userRepository.getUserDetails(saleForm.userId);
    if (!user) throw Error("[404], el usuario indicado no existe en la bd");

    if (product.quantity == 0) throw Error("[409], No hay producto en stock");

    product.quantity -= 1;

    let sale: Sale = new Sale();
    sale.date = saleForm.date;
    sale.product = product;
    sale.user = user;

    await this.productRepository.saveProduct(product);
    await this.saleRepository.saveSale(sale);
  }
}
