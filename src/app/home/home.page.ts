import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInicioSesionComponent } from '../components/modal-inicio-sesion/modal-inicio-sesion.component';
import { ModalRegistroComponent } from '../components/modal-registro/modal-registro.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  OnInit{



  token;
  slidesIni = [1,1,1,1,1,1,1,1,1,1];
  promos = [1,1,1,1,1,1,1,1,1,1];

  usuario = {

    nombre: "",
    email: ""
  }

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  async registrarUsuario(){

    const modal = await this.modalCtrl.create({
      component: ModalRegistroComponent,
      componentProps: {
        nombre: this.usuario.nombre,
        email: this.usuario.email
      }
    }
    );

    await modal.present();

    const {data} = await modal.onDidDismiss();

  }

  async iniciarSesion(){
    const modal = await this.modalCtrl.create({
      component: ModalInicioSesionComponent,
      componentProps: {
      }
    }
    );

    await modal.present();

    const {data} = await modal.onDidDismiss();
    this.token = data.item;
    console.log(this.token);
  }

  cerrarSesion(){

    this.token = null;
  }

}
