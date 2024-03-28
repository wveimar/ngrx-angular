import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './contador/hijo/hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'patron-redux';

  contador:number;

  constructor() {
    this.contador = 0;
  }

  increment() {
    this.contador += 1;
  }
  decrement() {
    this.contador -= 1;
  }
  reset () {
    this.contador = 0;
  }
}
