import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private apiUrl = 'https://product-catalog-api-1910.onrender.com/api/products';

    constructor(private http: HttpClient) { }

    // Get all products
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    // Get a product by ID
    getProductById(id: string): Observable<Product> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Product>(url);
    }

    // Create a new product
    createProduct(product: Product): Observable<HttpResponse<any>> {
        return this.http.post<any>(`${this.apiUrl}`, product, {
            observe: 'response',
        });
    }

    // Update a product by ID
    updateProduct(id: string, product: Product): Observable<Product> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<Product>(url, product);
    }

    // Delete a product by ID
    deleteProduct(id: string): Observable<{ message: string; id: string }> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<{ message: string; id: string }>(url);
    }
}
