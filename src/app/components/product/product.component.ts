import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {

  @Input()
  categories: Category[] = [];

  @Input()
  product: Product = {} as Product;

  @Output()
  saveEmmitter = new EventEmitter();

  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupProduct = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      category: [''],
      price: [''],
      newProduct: [''],
      promotion: ['']
    })
  }

  ngOnChanges(): void {
    this.formGroupProduct.setValue(this.product);
  }

  save() {
    Object.assign(this.product, this.formGroupProduct.value);
    this.saveEmmitter.emit(true);
  }

  cancel() {
    this.saveEmmitter.emit(false);
  }

  selectedCategory(category1: Category, category2: Category) {
    return category1 && category2 ? category1.id === category2.id : false;
  }
}
