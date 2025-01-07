import { Component, Input } from '@angular/core';
import CatalogProduct from '../../model/CatalogProduct';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import CartProduct from '../../model/CartProduct';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-paints-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paint-card.component.html',
  styleUrl: './paint-card.component.scss',
})
export class paintsCardComponent {
  constructor(private router: Router, private toastService: ToastService) {}

  @Input() product!: CatalogProduct;

  redirectToShopDetails(id: string) {
    this.router.navigate([`/shop/${id}`]);
  }
}
