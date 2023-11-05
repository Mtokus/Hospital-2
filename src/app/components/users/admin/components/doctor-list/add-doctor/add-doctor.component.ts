import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { pipe } from 'rxjs';
import { MaterialModule } from 'src/app/common/material/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';

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
  branch!: string;
  hospitalName!: string;
  email!: string;
  phoneNumber!: string;
  descriptipn!: string;
  date!: Date;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    private _dialogref: MatDialogRef<AddDoctorComponent>
  ) {
    this.title = data.title;
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      _id: ['', []],
      name: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      hospitalName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      descriptipn: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
  addNewDoctor() {
    this._dialogref.close(this.form.value);
  }
  cancelNewDoctor() {
    this._dialogref.close();
  }
}
