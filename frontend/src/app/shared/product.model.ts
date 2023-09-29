export interface Product {
    _id?: string;
    name: string;
    description: string;
    sku: string;
    image: string;
    tags: string[];
    price: number;
    stock: number;
}
