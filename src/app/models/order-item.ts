export class OrderItem {
    idOrderItem?:number 
    idBook?:number 
    title?:String 
    unitPrice?:number 
    quantity?:number
    subTotal?:number
}

export interface IOrderItem {
    idOrderItem:number; 
    idBook:number; 
    title:string; 
    unitPrice:number; 
    quantity:number;
    subTotal:number;
}