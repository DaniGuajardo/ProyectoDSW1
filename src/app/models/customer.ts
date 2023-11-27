export class Customer {
    idCustomer?:number 
    name?:String 
    lastName?:String
    dni?:String
    phone?:String
    email?:String
}

export interface ICustomer {
    idCustomer:number; 
    name:string; 
    lastName:string;
    dni:string;
    phone:string;
    email:string;
}
