import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Category[]=[];

  constructor(
     private categoryService:CategoryService
  ) { 

    
  }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      //console.error(data)
      this.categories=data.Result.TreeList
    })
  }

  getCategoryId(category:Category):void{
    window.location.href=`categories/CategoryID/${category.ID}`
  }

  filterCategory()
  {
    return this.categories.filter(x=>x.SubCategoryList.length==0)
  }
  filterCategorySub()
  {
    return this.categories.filter(x=>x.SubCategoryList.length>0)
  }
}
