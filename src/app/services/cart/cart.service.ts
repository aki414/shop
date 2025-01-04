import { Injectable } from '@angular/core';
import CartProduct from '../../model/CartProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private listOfProducts = new BehaviorSubject<CartProduct[]>([]);
  listOfProducts$ = this.listOfProducts.asObservable();

  private total = new BehaviorSubject<{ subtotal: number; total: number }>({
    subtotal: 0,
    total: 0,
  });
  total$ = this.total.asObservable();

  quantityOfProductsInCart: number = 0;

  constructor() {}

  addProductToCart(product: CartProduct) {
    const productIndex = this.listOfProducts
      .getValue()
      .findIndex(
        (item) =>
          item.id === product.id
      );

    if (productIndex != -1) {
      this.listOfProducts.getValue()[productIndex].updateQuantity();
    } else {
      const updateProducts = [
        ...this.listOfProducts.getValue(),
        new CartProduct(
          product.id,
          product.code,
          product.name,
          product.title,
          product.description,
          product.price,
          product.category,
          product.image,
          product.createdAt,
          product.updatedAt,
          product.discount
        ),
      ];
      this.listOfProducts.next(updateProducts);
    }
    this.calculateTotal();
  }

  removeProductFromListOfProduct(product: CartProduct): void {
    const productIndex = this.listOfProducts
      .getValue()
      .findIndex(
        (item) =>
          item.id === product.id

      );
    this.listOfProducts.getValue().splice(productIndex, 1);
    this.listOfProducts.next(this.listOfProducts.getValue());
  }

  calculateTotal() {
    const subtotal = this.listOfProducts.getValue().reduce((acc, product) => {
      return product.quantity * product.price + acc;
    }, 0);
    const discount = this.listOfProducts.getValue().reduce((acc, product) => {
      return product.discount ? product.discount + acc : acc;
    }, 0);
    console.log((subtotal * discount) / 100);
    this.total.next({
      subtotal: subtotal,
      total: subtotal - (subtotal * discount) / 100,
    });
  }
}
