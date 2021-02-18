import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular'
import { RouterModule } from '@angular/router';
import { ModalRegistroComponent } from './modal-registro/modal-registro.component';
import {ModalInicioSesionComponent} from './modal-inicio-sesion/modal-inicio-sesion.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
      ModalRegistroComponent,
      ModalInicioSesionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
      ModalRegistroComponent,
      ModalInicioSesionComponent
  ]
})
export class ComponentsModule { }