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
    this.categories = this.categoryService.getCategories();
    this.products = this.productService.getProducts();
  }

  save() {
    this.productService.saveProduct(this.product);
    this.product = {} as Product;
  }
}
