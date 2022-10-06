import { Product } from './Product';

export interface Search{
    Success: boolean,
    Message: string,
    Result: Result[]
}

export interface Result{
    ProductList: Product[];
}