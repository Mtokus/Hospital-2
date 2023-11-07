import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { DataService } from 'src/app/components/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HospitalModel } from 'src/app/components/models/hospital.model';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss'],
})
export class HospitalListComponent  implements OnInit{
  hospitalList: HospitalModel[] = [];
  hospital: HospitalModel;

  constructor(
    private _dialog: MatDialog,
    private _dataApi: DataService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getAllHospitals();
  }
  addHospital() {
    const dialogCongfig = new MatDialogConfig();
    dialogCongfig.disableClose = false;
    dialogCongfig.autoFocus = true;
    dialogCongfig.data = {
      title: 'Hastane Ekle',
    };
    const dialogRef = this._dialog.open(AddHospitalComponent, dialogCongfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._dataApi.addNewHospital(data);
        this.openSnackBar('Hastane Kaydı başarıyla gerçekleşti', 'Tamam');
      }
    });
  }
  getAllHospitals() {
    this._dataApi.getAllHospitals().subscribe((res) => {
      this.hospitalList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
