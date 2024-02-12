import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()
  categories: Category[] = [];

  @Input()
  product?: Product;

  @Output()
  saveEmmitter = new EventEmitter();

  save() {
    this.saveEmmitter.emit();
  }

  cancel() {
    this.product = {} as Product;
  }
}
