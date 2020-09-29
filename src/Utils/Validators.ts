import { UserForm } from "../Models/Interfaces/User.Form";
import { ProductForm } from "../Models/Interfaces/Product.Form";
import { SaleForm } from "../Models/Interfaces/Sale.Form";

export function validateUser(user: UserForm) {
  if (!user.email) throw new Error("[400], no existe la propiedad email");
  if (!user.firstSurname)
    throw new Error("[400], no existe la propiedad firstSurname");
  if (!user.lastSurname)
    throw new Error("[400], no existe la propiedad lastSurname");
  if (!user.password) throw new Error("[400], no existe la propiedad password");
  if (!user.rol) throw new Error("[400], no existe la propiedad rol");
  if (!user.name) throw new Error("[400], no existe la propiedad name");
}

export function validateProduct(product: ProductForm) {
  if (!product.name) throw new Error("[400], no existe la propiedad name");
  if (!product.price) throw new Error("[400], no existe la propiedad price");
  if (!product.image) throw new Error("[400], no existe la propiedad image");
  if (!product.description)
    throw new Error("[400], no existe la propiedad description");
  if (!product.quantity)
    throw new Error("[400], no existe la propiedad quantity");
}

export function validateSale(sale: SaleForm) {
  if (!sale.date) throw new Error("[400], no existe la propiedad date");
  if (!sale.productId)
    throw new Error("[400], no existe la propiedad productId");
  if (!sale.userId) throw new Error("[400], no existe la propiedad userId");
}
