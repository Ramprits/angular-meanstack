import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addProduct();
  }

  addProduct() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['']
    });
  }
  onSave() {
    if (this.productForm.invalid) {
      return false;
    }
    this.productService.addProduct(this.productForm.value).subscribe(data => {
      console.log(data.message);
      this.productForm.reset();
      this.router.navigate(['/product']);
    });
  }
}
