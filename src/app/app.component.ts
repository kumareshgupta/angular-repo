import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  //template: '<h1>Good Morning Universe</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolation
  title = 'angular-app';
  message = 'I born to code';

  //Property Binding
  linkUrl = 'https://www.india.gov.in';

  //Event Binding
  handleClick(){
    alert('Button is clicked');
  }

  //Two-way Binding
  userInput = "Initial Value";
}
