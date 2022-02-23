import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
import { Empleado } from 'src/app/interface/empleado.interface';
import { RegistroService } from 'src/app/services/registro.service';



@Component({
  selector: 'app-contatof',
  templateUrl: './contatof.component.html',
  styleUrls: ['./contatof.component.css']
})
export class ContatofComponent{
  formulario = this.nuevoFormualario.group({
    nombre:'',
    apellido:'',
    edad:'',
    puesto:''

    });

    datos: Empleado []=[];
  constructor(private nuevoFormualario:FormBuilder,private RegistroServices:RegistroService) { 

  }
  
  CHILLSAVE(){
    let nuevoempledo : Empleado = {
        nombre :this.formulario.get('nombre')?.value,
        apellido:this.formulario.get('apellido')?.value,
        edad:this.formulario.get('edad')?.value, 
        puesto:this.formulario.get('puesto')?.value,
    }
    this.RegistroServices.addCita(nuevoempledo);

  
    this.datos.push(nuevoempledo);//PONER EN ARRAY

   
    this.limpiarForm();
}


limpiarForm(){
    this.formulario.reset()
}
}