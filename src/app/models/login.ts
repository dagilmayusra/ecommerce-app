export interface Login{
 email:string;
 password:string;
}

export interface Exception{
    ErrorCode: number,
    Message:string,
    InnerException:string
}