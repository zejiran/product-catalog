import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchTerm: string = '';
  totalPages: number = 1;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // Fetch all products from the server
  getProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
      this.updateFilteredProducts();
    });
  }

  // Update the list of filtered products based on search term
  updateFilteredProducts() {
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }

  // Pagination: Go to the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Pagination: Go to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Handle viewing a product
  viewProduct(product: Product) {
    this.router.navigate(['/product', product._id]);
  }

  // Handle editing a product
  editProduct(product: Product) {
    this.router.navigate(['/edit-product', product._id]);
  }

  // Handle deleting a product
  deleteProduct(product: Product) {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${product.name}?`);
    if (confirmDelete) {
      if (product._id) {
        this.productService.deleteProduct(product._id).subscribe(() => {
          // Product deleted, update the product list.
          this.getProducts();
        });
      } else {
        console.error("Product does not have an ID.");
      }
    }
  }
}