import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  //el decorador @input es para poder recibir valores en estas variables
  //desde otros componentes
  @Input() presupuestoTotal:number; 
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcentajeTotal:number; 
  constructor() { }

  ngOnInit() {
  }

}
