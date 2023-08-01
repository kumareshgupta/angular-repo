import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  getInfo():string{
    return 'Here you can find lot of INFORMATION....from infoService.';
  }
  
}
