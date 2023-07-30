import { Component, Input } from '@angular/core';
import { UrlCreationOptions } from '@angular/router';

@Component({
  selector: 'single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  @Input()
  product: {
    name: string;
    price: number;
    createDate: string;
    image: string;
  };


  

}
