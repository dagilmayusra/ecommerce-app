import { Detail } from './../../models/Detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  detail: Detail;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService.getProductById(params['id']).subscribe((data) => {
        this.detail = data.Result;
        console.error(data.Result);
      });
    });
  }
  search(search: string): string {
    return this.detail.VisibleAttributeList.filter((x) =>
      x.DisplayName.includes(search)
    )[0].DisplayName;
  }
  counter(y: number) {
    var data = [];
    this.detail.VisibleAttributeList.forEach((item, index) => {
      if (index >= this.detail.VisibleAttributeList.length - y) {
        data.push(item);
      }
    });
    return data;
  }
}
