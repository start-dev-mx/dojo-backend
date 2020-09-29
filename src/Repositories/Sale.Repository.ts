import { Repository } from "typeorm";
import { Sale } from "../Models/Entities/Sales";
import { connect } from "../Utils/Bd";

export class SaleRepository {
  private repository: Repository<Sale>;

  async getConnection() {
    if (!this.repository) {
      this.repository = (await connect()).getRepository(Sale);
    }
  }

  async saveSale(sale: Sale) {
    await this.getConnection();
    return await this.repository.save(sale);
  }
}
