import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';
import { Empleado } from 'src/app/interface/empleado.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
 
datos:Empleado[]=[];

  constructor(private RegistroService:RegistroService) {

   }
  
  ngOnInit(): void {
    this.datos = this.RegistroService.getAll();
    console.log(this.datos);

    
  }

}
