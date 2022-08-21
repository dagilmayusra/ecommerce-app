import { VisibleAttribute } from "./VisibleAttribute";

export interface Detail{
    ID:number,
    ActualPriceToShowOnScreen:number,
    BrandName:string,
    Description:string,
    DisplayName:string,
    ProductType:string,
    ExternalSystemCode:number,
    CategoryID:number, //""
    CategoryName:string, //""
    IsStrikeThroughPriceExists:boolean,
    IsStrikeThroughPrice:boolean,
    IsStrikeThroughPriceShow:boolean,
    IsClickAndCollect:boolean,
    PageTitle:string,
    FirstProductImageURL:string,
    StrikeThroughPriceToShowOnScreen:number,
    DiscountRate:number,
    ShareUrl:string,
    VisibleAttributeList: VisibleAttribute[]
}