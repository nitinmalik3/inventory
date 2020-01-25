import { Component, OnInit } from '@angular/core';
import { TaxCalculatorService } from 'src/app/tax-calculator.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private obj : TaxCalculatorService) {
    
   }

  ngOnInit() {
  }

}
