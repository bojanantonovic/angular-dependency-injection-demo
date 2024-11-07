import { Component } from '@angular/core';
import { RandomNumberService } from './random-number-service'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected service: RandomNumberService) {}
}
