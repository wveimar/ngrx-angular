import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieto',
  standalone: true,
  imports: [],
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.css'
})
export class NietoComponent implements OnInit {
@Input() contador:number = 0;
constructor() {}

ngOnInit(){
 
  
}
}
