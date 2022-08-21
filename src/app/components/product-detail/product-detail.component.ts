import { Detail } from './../../models/Detail';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from './../../services/detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail:Detail[]=[]

  constructor(
    private detailService:DetailService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  getDetail(id:number){
    
  }

}
