import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private ingresoServicio:IngresoServicio, 
              private egresoServicio:EgresoServicio){
                this.ingresos = ingresoServicio.ingresos;
                this.egresos = egresoServicio.egresos;
              }

              getIngresoTotal(){
                let ingresoTotal:number = 0;
                //por cada uno de los elementos que hay en ingresos,
                //vamos a sumarle a ingresoTotal cada valor al que estamos accediendo en el arreglo ingresos
                this.ingresos.forEach(ingreso =>{
                  ingresoTotal += ingreso.valor;
                }
                );
                return ingresoTotal;
              }

              getEgresoTotal(){
                let egresoTotal:number = 0;
                //por cada uno de los elementos que hay en ingresos,
                //vamos a sumarle a ingresoTotal cada valor al que estamos accediendo en el arreglo ingresos
                this.egresos.forEach(egreso =>{
                  egresoTotal += egreso.valor;
                }
                );
                return egresoTotal;
              }

              getPorcentajeTotal(){
                return this.getEgresoTotal()/this.getIngresoTotal();
              }

              getPresupuestoTotal(){
                return this.getIngresoTotal()-this.getEgresoTotal();
              }
}
