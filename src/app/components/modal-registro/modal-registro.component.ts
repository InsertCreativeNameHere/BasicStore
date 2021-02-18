import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.scss'],
})
export class ModalRegistroComponent implements OnInit {

  usuario = {

    nombre: "",
    email: "",
    pass: "",
    direccion:  ""
  }

  constructor(private navParams: NavParams,
              private fireServ: FirestoreService) {
    this.usuario.nombre = navParams.get('nombre');
    this.usuario.email = navParams.get('email');
   }

  ngOnInit() {}
  
  registrarUsuario(){

    this.fireServ.crearUsuario(this.usuario);
    alert("Registrado exitosamente");
  }

}
