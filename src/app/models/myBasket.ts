export interface MyBasket{
    user_id:string,
    book_id:string,
    detail:{
        count:number,
        updated:string
    }[],
    tut:any
}