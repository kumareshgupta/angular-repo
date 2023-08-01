import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  info: string;
  constructor(private infoService:InfoService){
    this.info = this.infoService.getInfo();
  }
}
