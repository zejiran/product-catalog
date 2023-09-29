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

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void { }

  // Handle form submission to create a new product
  createProduct() {
    this.productService.createProduct(this.newProduct).subscribe(() => {
      // Product created, navigate back to the product list
      this.router.navigate(['/product-list']);
    });
  }
}
