export class Employee {
    idEmployee?:number 
    name?:String 
    lastName?:String
    dni?:String
    phone?:String
    email?:String
}

export interface IEmployee {
    idEmployee:number; 
    name:string; 
    lastName:string;
    dni:string;
    phone:string;
    email:string;
}