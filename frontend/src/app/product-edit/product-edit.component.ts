import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    sku: '',
    image: '',
    tags: [],
    price: 0,
    stock: 0,
  };

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

  // Handle updating a product
  updateProduct() {
    if (this.product._id) {
      this.productService.updateProduct(this.product._id, this.product).subscribe(() => {
        // Product updated, navigate back to the product detail page.
        this.router.navigate(['/product', this.product._id]);
      });
    }
  }
}
