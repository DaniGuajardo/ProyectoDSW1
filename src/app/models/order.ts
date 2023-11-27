import { OrderItem } from "./order-item"

export class Order {
    idOrder?:number
    idCustomer?:number
    customerName?:String 
    orderDate?:String 
    amount?:number
    orderItem?: OrderItem[] 
}

export interface IOrder {
    idOrder:number;
    idCustomer:number;
    customerName:string; 
    orderDate:string;  
    amount:number;
    orderItem: OrderItem[]; 
}
