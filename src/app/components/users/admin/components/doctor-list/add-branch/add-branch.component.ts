import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { BranchModel } from 'src/app/components/models/branch.model';
import { DataService } from 'src/app/components/services/data.service';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  imports: [SharedModule,MaterialModule ],
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss'],
})
export class AddBranchComponent implements OnInit {
  title!: String;
  form!: FormGroup;
  branchName!:string;

  branchList:BranchModel[]=[]

  constructor(
    private fb: FormBuilder,
    private _branch:DataService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private _dialogref: MatDialogRef<AddBranchComponent>
  ) {
    this.title = data.title;
  }

  ngOnInit(): void {
    this.getBranchs();
    this.form=this.fb.group({
      branchName: ["",[Validators.required]]
    })
  }
  addNewBranch() {
    this._dialogref.close(this.form.value)
  }
  cancelNewBranch() {
    this._dialogref.close();
  }
  getBranchs(){
    this._branch.getAllBranchs().subscribe((res)=>{
      this.branchList=res.map((e:any)=>{
        const data=e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data;
      })
    })
  }
}
