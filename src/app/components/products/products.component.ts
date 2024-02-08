import { Component } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  categories: Category[] = [];

  products: Product[] = [];
  product: Product = {} as Product;

  constructor(private categoryService: CategoryService, private productService: ProductService) { }
  
  ngOnInit(): void{
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: data => {this.products = data}
    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: data => {this.categories = data}
    });
  }

  save() {
    this.productService.saveProduct(this.product).subscribe({
      next: data => {
        this.products.push(data);
        this.product = {} as Product;
      }
    })
  }
}
