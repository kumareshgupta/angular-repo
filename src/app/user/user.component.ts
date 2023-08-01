import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  isDisplay: boolean = false;
  cities=['Kashi', 'Mumbai', 'Bangalore'];

  data = {name:"Ram", email:"ram@gmail.com", location:"Mumbai"}

  onSubmit(form:any){
    if(form.valid){
      console.log('Form submitted', this.data);
    }
  }

}
