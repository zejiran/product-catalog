import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      if (productId) {
        this.productService.getProductById(productId).subscribe((data) => {
          this.product = data;
        });
      }
    });
  }

  // Handle editing a product
  editProduct() {
    if (this.product && this.product._id) {
      this.router.navigate(['/edit', this.product._id]);
    }
  }

  // Handle deleting a product
  deleteProduct() {
    if (this.product && this.product._id) {
      const confirmDelete = window.confirm(`Are you sure you want to delete ${this.product.name}?`);
      if (confirmDelete) {
        this.productService.deleteProduct(this.product._id).subscribe(() => {
          // Product deleted, navigate back to the product list.
          this.router.navigate(['/']);
        });
      }
    }
  }
}
