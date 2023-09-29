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
  itemsPerPage: number = 3;
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
    this.filteredProducts = this.products
      .filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()))
      )
      .slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  // Pagination: Go to the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredProducts();
    }
  }

  // Pagination: Go to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredProducts();
    }
  }

  // Handle viewing a product
  viewProduct(product: Product) {
    this.router.navigate(['/product', product._id]);
  }
}
