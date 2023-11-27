import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DoctorModel } from '../models/doctor.model';
import { AppointmentModel } from '../models/appointment.model';
import { MedicalUnits } from '../models/medical-units.model';
import { HospitalModel } from '../models/hospital.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _afs: AngularFirestore,
    private _auth:AuthService) {}
  // Doktor İşlemleri

  addDoctor(doctor: DoctorModel) {
    doctor._id = this._afs.createId();
   this._afs.collection('Doctor/').add(doctor);
   
  }
  getAllDoctors() {
    return this._afs.collection('Doctor/').snapshotChanges();
  }
  //Hastane İşlemleri
  addNewHospital(hospital: HospitalModel) {
    hospital.hospitalId = this._afs.createId();
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
  addNewUnit(medicalUnit: MedicalUnits) {
    medicalUnit._id = this._afs.createId();
    return this._afs.collection('MedicalUnits/').add(medicalUnit);
  }
  getMedicalUnits() {
    return this._afs.collection('MedicalUnits/').snapshotChanges();
  }
  // Hasta Sayfası İşlemleri
  addNewAppointment(appointment:AppointmentModel){
    appointment._id=this._afs.createId();
    return this._afs.collection("Appointments/").add(appointment);
  }
  getAppointments(){
    return this._afs.collection('Appointments/').valueChanges();
  }
  getDoctorByHospitalName() {
    return this._afs.collection('Doctor/').valueChanges();
  }
  
}
