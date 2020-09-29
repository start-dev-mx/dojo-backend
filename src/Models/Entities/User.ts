import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./Sales";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  userId: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ name: "first_surname" })
  firstSurname: string;

  @Column({ name: "last_surname" })
  lastSurname: string;

  @Column()
  rol: string;

  @OneToMany((type) => Sale, (sale) => sale.user)
  sales: Sale[];
}
