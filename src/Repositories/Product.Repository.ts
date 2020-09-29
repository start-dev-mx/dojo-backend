import { Repository } from "typeorm";
import { Product } from "../Models/Entities/Product";
import { connect } from "../Utils/Bd";

export class ProductRepository {
  private repository: Repository<Product>;

  async getConnection() {
    if (!this.repository) {
      this.repository = (await connect()).getRepository(Product);
    }
  }

  async saveProduct(product: Product) {
    await this.getConnection();
    return await this.repository.save(product);
  }

  async getProductDetails(productId: number) {
    await this.getConnection();
    return await this.repository.findOne({ productId });
  }

  async deleteProduct(productId: number) {
    await this.getConnection();
    return await this.repository.delete({ productId });
  }
}
