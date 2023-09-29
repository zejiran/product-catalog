import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  newProduct: Product = {
    name: '',
    description: '',
    sku: '',
    image: '',
    tags: [],
    price: 0,
    stock: 0,
  };

  errorMessage: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void { }

  // Handle form submission to create a new product
  createProduct() {
    this.errorMessage = ''; // Clear any previous error message

    this.productService.createProduct(this.newProduct).subscribe(
      (response) => {
        if (response.status === 201) {
          // Product created successfully
          console.log('Product created:', response.body);
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again.';
        }
      },
      (error) => {
        // Handle error response from the API
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again.';
        }
      }
    );
  }
}
