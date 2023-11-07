import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { HospitalModel } from 'src/app/components/models/hospital.model';
import { DataService } from 'src/app/components/services/data.service';
import { BranchModel } from 'src/app/components/models/branch.model';

@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent implements OnInit {
  form!: FormGroup;
  title!: string;

  name!: string;
  branchList: BranchModel[]=[];
  hospitalList : HospitalModel[] = [];
  email!: string;
  phoneNumber!: string;
  description!: string;
  date!: Date;

  constructor(
    private fb: FormBuilder,
    private _hospital:DataService,
    private _branch:DataService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private _dialogref: MatDialogRef<AddDoctorComponent>
  ) {
    this.title = data.title;
  }
  ngOnInit(): void {
    this.getHospitals();
    this.getBranchs();
    this.form = this.fb.group({
      _id: ['', []],
      name: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      hospitalName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password:["",[Validators.required]],
      phoneNumber: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
  //Doktorlar
  addNewDoctor() {
    this._dialogref.close(this.form.value);
  }
  cancelNewDoctor() {
    this._dialogref.close();
  }
  //Hastane
  getHospitals() {
    this._hospital.getAllHospitals().subscribe((res) => {
      this.hospitalList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
  //Branş
  getBranchs(){
    this._branch.getAllBranchs().subscribe((res)=>{
      this.branchList=res.map((e:any)=>{
        const data=e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data;
      })
    })
  }
  //Şifre

  
}
