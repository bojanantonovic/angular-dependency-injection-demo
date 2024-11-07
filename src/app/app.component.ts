import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RandomNumberService} from './random-number-service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected service: RandomNumberService) {}
}
