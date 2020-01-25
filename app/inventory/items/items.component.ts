import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  @Output() dataEntered = new EventEmitter()

  itemName1:string=""
  itemName2:string=""
  itemPrice1:number
  itemPrice2:number

  itemsData:object

  onGenerateInvoice(){
    this.itemsData = {
      itemName1 : this.itemName1,
      itemName2 : this.itemName2,
      itemPrice1 : this.itemPrice1,
      itemPrice2 : this.itemPrice2
    }
    this.dataEntered.emit(this.itemsData);

  }

  ngOnInit() {
  }

}
