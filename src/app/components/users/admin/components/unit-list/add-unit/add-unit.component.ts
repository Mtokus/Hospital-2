import { Component,Inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/components/services/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-unit',
  standalone: true,
  imports: [SharedModule,MaterialModule],
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss']
})
export class AddUnitComponent implements OnInit {
form!:FormGroup
title!:string
unitName!:string
constructor(
  private fb :FormBuilder,
  private _unit:DataService,
  @Inject(MAT_DIALOG_DATA) data: any,
  private _dialogref: MatDialogRef<AddUnitComponent>
){
  this.title=data.title
}
  ngOnInit(): void {
    this.form= this.fb.group({
      unitName:["",[Validators.required]]
    })
  }
addNewUnit(){
  this._dialogref.close(this.form.value)
}
cancelNewUnit(){
  this._dialogref.close()
}
}
