import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {
  amount : number 
  getBill(amount:number){
    return amount * 120 / 100
  }
  getTax(amount:number){
    return amount * 20 / 100
  }
  constructor() { }
}
