import { Component } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  categories: Category[] = [];

  products: Product[] = [];
  product: Product = {} as Product;

  constructor(private categoryService: CategoryService) { }
  
  ngOnInit(): void{
    this.categories = this.categoryService.getCategories();
  }

  save() {
    this.product.id = this.products.length + 1;
    this.products.push(this.product);

    this.product = {} as Product;

    console.log(this.products);
  }
}
