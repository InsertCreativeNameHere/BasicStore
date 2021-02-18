import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-modal-inicio-sesion',
  templateUrl: './modal-inicio-sesion.component.html',
  styleUrls: ['./modal-inicio-sesion.component.scss'],
})
export class ModalInicioSesionComponent implements OnInit {

  inicio = {
    email: "",
    pass: ""
  }

  usuario = {

    nombre: "",
    email: "",
    pass: "",
    direccion:  ""
  }

  constructor(private fsService: FirestoreService,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  iniciarSesion(){
    let res = this.fsService.inciarSesion(this.inicio.email,this.inicio.pass);
    let valido = false;
    res.subscribe(resul =>{
      resul.forEach(usuario => {
         if (this.inicio.email == usuario.email && this.inicio.pass == usuario.pass) {
           valido = true;
          this.modalCtrl.dismiss({
            item : usuario
          }
          )
         }
      })
      if (valido == false) {
        alert("Usuario o contraseña invalida");
      }
    })
  }

}
