import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, filter, map, tap } from 'rxjs';
import { DoctorModel } from '../models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _afs: AngularFirestore) {}
  // Doktor İşlemleri

  addDoctor(doctor: any) {
    doctor.id = this._afs.createId();
    return this._afs.collection('Doctor/').add(doctor);
  }
  getAllDoctors() {
    return this._afs.collection('Doctor/').snapshotChanges();
  }
  //Hastane İşlemleri
  addNewHospital(hospital: any) {
    hospital.id = this._afs.createId();
    return this._afs.collection('Hospital/').add(hospital);
  }
  getAllHospitals() {
    return this._afs.collection('Hospital/').snapshotChanges();
  }
  //Branş Ekleme
  addBranch(branch: any) {
    branch.id = this._afs.createId();
    return this._afs.collection('Branch/').add(branch);
  }
  getAllBranchs() {
    return this._afs.collection('Branch/').snapshotChanges();
  }
  //Tıbbi Birim İşlemleri
  addNewUnit(medicalUnit: any) {
    medicalUnit.id = this._afs.createId();
    return this._afs.collection('MedicalUnits/').add(medicalUnit);
  }
  getMedicalUnits() {
    return this._afs.collection('MedicalUnits/').snapshotChanges();
  }
  // Hasta Sayfası İşlemleri
  addNewAppointment(appointment:any){
    appointment.id=this._afs.createId();
    return this._afs.collection("Appointments/").add(appointment);
  }
  getDoctorByHospitalName() {
    return this._afs.collection('Doctor/').valueChanges();
  }
}
