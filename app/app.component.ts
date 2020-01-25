import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-App';

  itemData:object
  
  collectData(data){
    this.itemData = data
    console.log(this.itemData)
  }
  
}
