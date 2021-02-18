import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  collectionName = 'Usuarios';
  Usuarios:Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  crearUsuario(registro){
    return this.firestore.collection(this.collectionName).add(registro);
  }

  inciarSesion(correo,pass){
    return this.firestore.collection(this.collectionName).valueChanges({idField: 'id'});
  }


}
