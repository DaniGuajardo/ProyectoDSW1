import { OrderItem } from "./order-item"

export class Order {
    idOrder?:number
    idCustomer?:number
    customerName?:String 
    orderDate?:String 
    amount?:number
    orderItem?: OrderItem[] 
}
