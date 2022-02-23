import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ContatofComponent } from '../contatof/contatof.component';

import { ListaComponent } from '../lista/lista.component';

const routes : Routes = [
 
  {
    path:'header',
    component:HeaderComponent
  },
  
  {
    path:'contactof',
    component:ContatofComponent
  }
  ,
  {
    path:'lista',
    component:ListaComponent
  }
  
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }