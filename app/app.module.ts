import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './inventory/items/items.component';
import { CheckoutComponent } from './inventory/checkout/checkout.component';
import { InvoiceComponent } from './inventory/invoice/invoice.component';
import { FormsModule } from '@angular/forms';
import { TaxCalculatorService } from './tax-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CheckoutComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
  ],
  providers: [TaxCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
