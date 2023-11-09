import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { DataService } from 'src/app/components/services/data.service';
import { MedicalUnits } from 'src/app/components/models/medical-units.model';

@Component({
  selector: 'app-add-hospital',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss'],
})
export class AddHospitalComponent implements OnInit {
  form!: FormGroup;
  title!: string;
  unitList : MedicalUnits[]=[];
  hospitalServices:string[]=["Kardiyoloji","Ortopedi","Ortodonti","Beyin Cerrahisi","Beslenme ve Diyet","Nöroloji"]

  constructor(
    private  fb: FormBuilder,
    private _dataApi:DataService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private _dialogref: MatDialogRef<AddHospitalComponent>
  ) {
    
  }
  ngOnInit(): void {
    this.getMedicalUnit();
    this.form=this.fb.group({
      hospitalName: ['', [Validators.required]],
      hospitalService:['', [Validators.required]],
      hospitalCity: ['', [Validators.required]],
      hospitalNumber: ['', [Validators.required]],
      hospitalEmail: ['', [Validators.required,Validators.email]],
      hospitalAddress: ['', [Validators.required]],
      hospitalPhoto:["",[Validators.required]]

    })
  }
  getMedicalUnit() {
    this._dataApi.getMedicalUnits().subscribe((res)=>{
      this.unitList=res.map((e:any)=>{
        const data=e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data
      })
    })
  }
  addNewHospital(){
    this._dialogref.close(this.form.value)
  }
  cancelNewHospital(){
    this._dialogref.close()
  }
}
