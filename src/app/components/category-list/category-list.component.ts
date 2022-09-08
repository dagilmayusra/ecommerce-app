import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { Category } from 'src/app/models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[] =[];
  categories:Category;

  constructor(
    private categoryService:CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      //console.error(data)
      this.categoryList=data.Result.TreeList
    })
  }

}
