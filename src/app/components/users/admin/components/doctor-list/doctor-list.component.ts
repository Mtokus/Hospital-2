import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { DataService } from 'src/app/components/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorModel } from 'src/app/components/models/doctor.model';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { BranchModel } from 'src/app/components/models/branch.model';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
  imports: [SharedModule, MaterialModule],
})
export class DoctorListComponent implements OnInit {
  doctorList: DoctorModel[] = [];
  doctor: DoctorModel;
  branchName: BranchModel;

  constructor(
    private _dialog: MatDialog,
    private _dataApi: DataService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getAllDoctors();
  }
  addDoctor() {
    const dialogCongfig = new MatDialogConfig();
    dialogCongfig.disableClose = true;
    dialogCongfig.autoFocus = true;
    dialogCongfig.data = {
      title: 'Doktor Ekle',
    };

    const dialogRef = this._dialog.open(AddDoctorComponent, dialogCongfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._dataApi.addDoctor(data);
        this.openSnackBar('Doktor Kaydı Başarıyla Gerçekleşti', ' Tamam');
      }
    });
  }

  getAllDoctors() {
    this._dataApi.getAllDoctors().subscribe((res) => {
      this.doctorList = res.map((e: any) => {
        const data = e.payload.doc.data();
        console.log(data.date.seconds);
        let convertedDate  = this.convertTimestampToDate(Number(data.date.seconds));
        data.date = new Date(convertedDate);
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
  
  convertTimestampToDate(timeStampValue: number){
    let date = new Date(timeStampValue * 1000);
    console.log(timeStampValue);
    console.log(date)
    let day = date.getDay();
    let month = date.getMonth();
    let year =date.getFullYear();

    let formattedTime = day + '.' + month + '.' + year;
    console.log(formattedTime);
    return formattedTime;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  //Branş İşlemleri
  addBranch() {
    const dialogCongfig = new MatDialogConfig();
    dialogCongfig.disableClose = false;
    dialogCongfig.autoFocus = true;
    dialogCongfig.data = {
      title: 'Branş Ekle',
    };
    const dialogRef = this._dialog.open(AddBranchComponent, dialogCongfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._dataApi.addBranch(data);
        this.openSnackBar('Branş Kaydı Başarıyla Gerçekleşti', ' Tamam');
      }
    });
  }
}
