import { Component, OnInit, Input,Injectable } from '@angular/core';
import { TaxCalculatorService } from 'src/app/tax-calculator.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private obj : TaxCalculatorService) { }

  @Input() data

  calculateTax(){
    this.obj.amount = this.data.itemPrice1 + this.data.itemPrice2
    console.log(this.obj.amount)
  }

  ngOnInit() {
  }

}
