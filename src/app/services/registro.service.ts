import { Injectable } from '@angular/core';
import { Empleado } from '../interface/empleado.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  datos: Empleado[]=[]
   i!: number;

  constructor(private http:HttpClient) { 

  }
  addCita(dato:Empleado){
    this.datos.push(dato);
    
  }
  getAll(){
    return this.datos;
  }
  eliminar(){
    var elimina = this.datos.splice(0, this.datos.length);
  }
}
