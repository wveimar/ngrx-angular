import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

  @Input () contador:number = 0;
ngOnInit(){
  
}
dividir (){
this.contador /=2;
}
multiplicar (){
this.contador *=2
}

}
