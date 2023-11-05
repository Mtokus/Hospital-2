import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { MaterialModule } from 'src/app/common/material/material.module';
import { Data } from '@angular/router';
import { DataService } from 'src/app/components/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-doctor-list',
    standalone: true,
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.scss'],
    imports: [SharedModule,MaterialModule]
})
export class DoctorListComponent {

    constructor (
        private _dialog:MatDialog,
        private _dataApi: DataService,
        private _snackBar: MatSnackBar
    ){

    }
    addDoctor() {
        const dialogCongfig = new MatDialogConfig();
        dialogCongfig.disableClose = true;
        dialogCongfig.autoFocus = true;
        dialogCongfig.data = {
          title: 'Doktor Ekle',
        };
    
        const dialogRef = this._dialog.open(AddDoctorComponent, dialogCongfig);
        dialogRef.afterClosed().subscribe(data=> {
          if(data){
           this._dataApi.addDoctor(data);
           console.log(data);
           this.openSnackBar("Doktor Kaydı Başarıyla Gerçekleşti",  " Tamam")
          }
        })
      }
      openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
      }
    
    
}
