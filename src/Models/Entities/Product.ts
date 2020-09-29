import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./Sales";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn({ name: "product_id" })
  productId: number;

  @Column()
  name: string;

  @Column({ type: "float" })
  price: number;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @ManyToOne((type) => Sale, (sale) => sale.product)
  sales: Sale[];
}
