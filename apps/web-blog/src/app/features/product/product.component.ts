import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { BaseComponent } from '@myworkspace/core';
import * as io from 'socket.io-client';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {
  products: any[];
  socket: any;
  constructor(
    private productService: ProductService,
    private ngxLoading: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    super();
  }

  ngOnInit() {
    this.getProducts();
    this.socket.on('refreshPage', data => {
      this.getProducts();
    });
  }

  getProducts() {
    this.ngxLoading.show();
    setTimeout(() => {
      this.productService.getProducts().subscribe(
        data => {
          this.products = data.products;
          this.ngxLoading.hide();
        },
        error => {
          this.ngxLoading.hide();
          this.toastr.error(error.message);
        }
      );
    }, 100);
  }
}
