import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { DoctorModel } from 'src/app/components/models/doctor.model';
import { HospitalModel } from 'src/app/components/models/hospital.model';
import { MedicalUnits } from 'src/app/components/models/medical-units.model';
import { DataService } from 'src/app/components/services/data.service';

@Component({
  selector: 'app-create-appointment',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss'],
})
export class CreateAppointmentComponent implements OnInit {
  title!: string;
  form!: FormGroup;
  hospitalList: HospitalModel[] = [];
  doctorList: DoctorModel[] = [];
  unitList: MedicalUnits[] = [];
  hospitalSelected!: string;
  hospitalName!: string;
  unitName!: string;
  doctorName!: string;
  availableAppointmentTimes: string[];

  constructor(
    private _fb: FormBuilder,
    private _dataApi: DataService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private _dialogRef : MatDialogRef<CreateAppointmentComponent>
  ) {
    this.title = data.title;
  }
  ngOnInit(): void {
    this.form = this._fb.group({
      hospitalName: ['', [Validators.required]],
      doctorName: ["", [Validators.required]],
      unitName:["",[Validators.required]],
      appointmentTime:["",[Validators.required]],
      patientName: [localStorage.getItem("displayName"), [Validators.required]],
      patientEmail: [localStorage.getItem("patientEmail"), [Validators.required]],
      
      
    });
   
    if (this.form) {
      this.form.get('hospitalName').valueChanges.subscribe((res) => {
    
        this.hospitalSelected = res;
        
        this.getAllDoctors();
      });
      this.form.get("doctorName").valueChanges.subscribe(value => {
        this.doctorName = value.doctorName;
        this.getAvailableAppointmentTimes();
      });
    }
    this.getHospitals();
    
    
  }

  getHospitals() {
    this._dataApi.getAllHospitals().subscribe((res) => {
      this.hospitalList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }

  getAllDoctors() {
    if (this.hospitalSelected) {
      this._dataApi
        .getDoctorByHospitalName()
        .pipe(
          map((doctorList: any[]) =>
            doctorList.filter(
              (doctor) => doctor.hospitalName == this.hospitalSelected
            )
          )
        )
        .subscribe((res) => {
          this.doctorList = res;
        });
      
    }
  }
  getAvailableAppointmentTimes() {

    this.availableAppointmentTimes = ['09:00', '10:00', '11:00', "12:00",'14:00', '15:00'];
  }
  createNewAppointment(){
    this._dialogRef.close(this.form.value)
  }
}


