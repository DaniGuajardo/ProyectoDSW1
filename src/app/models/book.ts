export class Book {
    idBook ?:number 
    title?:String 
    author?:String
    idCategory?:number 
    price?:number
    stock?:number
    imageUrl?:String
}

export interface IBook {
    idBook:number; 
    title:string;
    author:string;
    idCategory:number; 
    price:number;
    stock:number;
    imageUrl:string;
}

