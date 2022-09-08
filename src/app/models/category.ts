//treelist
export class Category{
    ID: number;
    IsSelected: boolean;
    DisplayName: string;
    DisplayOrder: number;
    Code: string;
    ImageUri: string;
    IsNotHyperlink:boolean;
    IsBrandCategory: string;
    ShowProducts:boolean;
    HasProduct: boolean;
    Count: number;
    SubCategoryList:Category [];
}