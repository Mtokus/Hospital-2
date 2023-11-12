import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { DoctorModel } from 'src/app/components/models/doctor.model';
import { HospitalModel } from 'src/app/components/models/hospital.model';
import { MedicalUnits } from 'src/app/components/models/medical-units.model';
import { DataService } from 'src/app/components/services/data.service';

@Component({
  selector: 'app-create-appointment',
  standalone: true,
  imports: [SharedModule,MaterialModule],
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit{
title !:string
form !:FormGroup
hospitalList:HospitalModel []=[];
hospitalSelected !:string;
unitList:MedicalUnits []=[]
doctorList:DoctorModel []=[];

hospitalName!:string;
unitName !:string;
doctorName !:string

constructor(
  private _fb:FormBuilder,
  private _hospital:DataService,
  private _dataApi:DataService,
  @Inject (MAT_DIALOG_DATA) data:any,

){
  this.title=data.title
}
  ngOnInit(): void {
    this.getHospitals();
    this.getMedicalUnit();
    this.getAllDoctors();
    this.form=this._fb.group({
      hospitalName:["",[Validators.required]],
      unitName:["",[Validators.required]],
      doctorName:["",[Validators.required]]
    })
  }
  getHospitals() {
    this._hospital.getAllHospitals().subscribe((res) => {
      this.hospitalList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
  getMedicalUnit() {
    this._dataApi.getMedicalUnits().subscribe((res) => {
      this.unitList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      }); 
    });
  }
  getAllDoctors() {
    this._dataApi.getAllDoctors().subscribe((res) => {
      this.doctorList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }

  CreateNewAppointment(){}
}