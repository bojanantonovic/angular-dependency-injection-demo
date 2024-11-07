import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  randomNumber(): Number {
    return Math.floor(Math.random() * 100);
  }
}
