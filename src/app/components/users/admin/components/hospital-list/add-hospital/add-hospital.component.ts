import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/common/shared/material.module';

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
  hospitalServices:string[]=["Kardiyoloji","Ortopedi","Ortodonti","Beyin Cerrahisi","Beslenme ve Diyet","Nöroloji"]

  constructor(
    private  fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    private _dialogref: MatDialogRef<AddHospitalComponent>
  ) {
    this.title = data.title;
  }
  ngOnInit(): void {
    this.form=this.fb.group({
      hospitalName: ['', [Validators.required]],
      hospitalService:['', [Validators.required]],
      hospitalCity: ['', [Validators.required]],
      hospitalNumber: ['', [Validators.required]],
      hospitalEmail: ['', [Validators.required,Validators.email]],
      hospitalAddress: ['', [Validators.required]],

    })
  }
  addNewHospital(){
    this._dialogref.close(this.form.value)
  }
  cancelNewHospital(){
    this._dialogref.close()
  }
}
