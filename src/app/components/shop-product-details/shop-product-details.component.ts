import { Component, Input, OnInit } from '@angular/core';
import CatalogProduct from '../../model/CatalogProduct';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import CartProduct from '../../model/CartProduct';
import { ToastService } from '../../services/toast/toast.service';
@Component({
  selector: 'app-shop-product-details',
  standalone: true,
  imports: [
    TabViewModule,
    AccordionModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './shop-product-details.component.html',
  styleUrl: './shop-product-details.component.scss',
})
export class ShopProductDetailsComponent implements OnInit {
  @Input() product!: CatalogProduct;
  productForm = new FormGroup({
    productId: new FormControl<number>(0),
    productCode: new FormControl<string>(''),
    productName: new FormControl<string>(''),
    productTitle: new FormControl<string>(''),
    productDescription: new FormControl<string>(''),
    productPrice: new FormControl<number>(0),
    productCategory: new FormControl<string>(''),
    productImage: new FormControl<string>(''),
    productCreatedAt: new FormControl<Date>(new Date()),
    productUpdatedAt: new FormControl<Date>(new Date()),
    productDiscount: new FormControl<number | undefined>(undefined),
  });

  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  productIsNotAvailable: boolean = false;

  ngOnInit() {
  }

  createNewcartItem(): CartProduct {
    const cartProduct = new CartProduct(
      this.product.id!,
      this.product.code!,
      this.product.name!,
      this.product.title!,
      this.product.description!,
      this.product.price!,
      this.product.category!,
      this.product.image!,
      this.product.createdAt!,
      this.product.updatedAt!,
      this.product.discount!,
    );
    return cartProduct;
  }

  addProductToCart(): void {

    if (this.productForm.valid) {
      this.cartService.addProductToCart(this.createNewcartItem());
      this.toastService.showToast(this.createNewcartItem());
    }
  }
}
