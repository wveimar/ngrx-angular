import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NietoComponent } from '../nieto/nieto.component';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [NietoComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

  @Input () contador:number = 0;
  @Output () cambioContador=new EventEmitter<number>();
ngOnInit(){
  
}
dividir (){
this.contador /=2;
this.cambioContador.emit(this.contador);
}
multiplicar (){
this.contador *=2
this.cambioContador.emit(this.contador);
}
resetNieto(event:number){
  this.contador = event
  this.cambioContador.emit(event);
}

}
