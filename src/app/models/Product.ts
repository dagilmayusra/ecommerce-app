import { Attribute } from "./Attribute"

export interface Product{
    ID:number,
    FirstProductImageURL:string,
    FirstProductImagePngURL:string,
    SecondProductImageURL:string,
    SecondProductImagePngURL:string,
    BrandName: string,
    ExternalSystemCode:number,
    StrikeThroughPriceToShowOnScreen:number,
    ActualPriceToShowOnScreen:number,
    Classifications: [] 
    IsStrikeThroughPriceExists:boolean,
    IsStrikeThroughPrice:boolean,
    DisplayName:string,
    ProductType:string,
    IsPreOrder:boolean,
    EstimatedSupplyDate:string,
    Score:number,
    CommentCount:number,
    AttributeList:Attribute[]
}