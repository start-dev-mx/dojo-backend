import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity({ name: "sales" })
export class Sale {
  @PrimaryGeneratedColumn({ name: "sale_id" })
  saleId: number;

  @ManyToOne((type) => User, (user) => user.sales)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne((type) => Product, (product) => product.sales)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @Column({ type: "date" })
  date: string;
}
