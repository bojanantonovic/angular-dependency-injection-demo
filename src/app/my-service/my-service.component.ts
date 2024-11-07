import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceComponent {

  randomNumber(): Number {
    return Math.floor(Math.random() * 100);
  }
}
