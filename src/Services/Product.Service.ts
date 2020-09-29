import { Product } from "../Models/Entities/Product";
import { ProductForm } from "../Models/Interfaces/Product.Form";
import { ProductRepository } from "../Repositories/Product.Repository";
import { validateProduct } from "../Utils/Validators";

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(productForm: ProductForm) {
    validateProduct(productForm);
    let productToSave: Product = new Product();

    productToSave.name = productForm.name;
    productToSave.price = productForm.price;
    productToSave.image = productForm.image;
    productToSave.description = productForm.description;
    productToSave.quantity = productForm.quantity;

    return await this.productRepository.saveProduct(productToSave);
  }

  async getProductDetails(productId: number) {
    return await this.productRepository.getProductDetails(productId);
  }

  async deleteProduct(productId: number) {
    return await this.productRepository.deleteProduct(productId);
  }

  async updateProduct(productId: number, productForm: ProductForm) {
    let product: Product = await this.getProductDetails(productId);

    product.name = productForm.name;
    product.price = productForm.price;
    product.image = productForm.image;
    product.description = productForm.description;
    product.quantity = productForm.quantity;

    return await this.productRepository.saveProduct(product);
  }
}
