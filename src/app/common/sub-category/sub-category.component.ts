import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
@Input() subCategory:Category[]=[]
@Input () displayName:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
