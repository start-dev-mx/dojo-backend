import { Repository } from "typeorm";
import { User } from "../Models/Entities/User";
import { connect } from "../Utils/Bd";

export class UserRepository {
  private repository: Repository<User>;

  async getConnection() {
    if (!this.repository) {
      // si repository es nulo o undefined
      this.repository = (await connect()).getRepository(User);
    }
  }

  async saveUser(user: User) {
    await this.getConnection();
    return await this.repository.save(user);
  }

  async getUserDetails(userId: number) {
    await this.getConnection();
    return await this.repository.findOne({ userId });
  }

  async deleteUser(userId: number) {
    await this.getConnection();
    return await this.repository.delete({ userId });
  }
}
