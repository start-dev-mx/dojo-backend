import { User } from "../Models/Entities/User";
import { UserForm } from "../Models/Interfaces/User.Form";
import { UserRepository } from "../Repositories/User.Repository";
import { validateUser } from "../Utils/Validators";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userForm: UserForm) {
    validateUser(userForm);
    let userToSave: User = new User(); // equivale a un insert o create del CRUD

    userToSave.email = userForm.email;
    userToSave.password = userForm.password;
    userToSave.name = userForm.name;
    userToSave.firstSurname = userForm.firstSurname;
    userToSave.lastSurname = userForm.lastSurname;
    userToSave.rol = userForm.rol;

    return await this.userRepository.saveUser(userToSave);
  }

  async getUserDetails(userId: number) {
    return await this.userRepository.getUserDetails(userId);
  }

  async deleteUser(userId: number) {
    return await this.userRepository.deleteUser(userId);
  }

  async updateUser(userId: number, userForm: UserForm) {
    let user: User = await this.getUserDetails(userId);

    user.name = userForm.name;
    user.firstSurname = userForm.firstSurname;
    user.lastSurname = userForm.lastSurname;

    return await this.userRepository.saveUser(user);
  }
}
