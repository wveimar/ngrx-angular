import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  standalone: true,
  imports: [],
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.css'
})
export class NietoComponent implements OnInit {
@Input() contador:number = 0;
@Output() contadorCambio=new EventEmitter<number>();
constructor() {}

ngOnInit(){
 
  
}

reset(){
  this.contador = 0;
  this.contadorCambio.emit(this.contador);
}
}
