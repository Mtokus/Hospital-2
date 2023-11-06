import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _afs:AngularFirestore
  ) { }
// Doktor İşlemleri 

  addDoctor(doctor:any){
    doctor.id=this._afs.createId();
    return this._afs.collection("Doctor/").add(doctor);
  }
  getAllDoctors(){
    return this._afs.collection("Doctor/").snapshotChanges();
  }

}
//Hastane İşlemleri