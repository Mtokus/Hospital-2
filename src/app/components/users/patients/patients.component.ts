import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NavbarPatientComponent } from "./navbar-patients/navbar-patients.component";
import { MaterialModule } from 'src/app/common/shared/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetAppointmentComponent } from './get-appointment/get-appointment.component';

@Component({
    selector: 'app-patients',
    standalone: true,
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    imports: [SharedModule, NavbarPatientComponent,MaterialModule]
})
export class PatientsComponent {

    constructor(
        private _dialog:MatDialog,
        private _dataApi:DataService,
        private _snackBar:MatSnackBar,
    ){}
    CreateAppointment(){
        const dialogCongfig= new MatDialogConfig();
        dialogCongfig.disableClose=true;
        dialogCongfig.autoFocus=true;
        dialogCongfig.data={
            title: "Randevu Al"
        };
        const dialogRef=this._dialog.open(CreateAppointmentComponent,dialogCongfig)
        dialogRef.afterClosed().subscribe((data)=>{
            if (data){
                this._dataApi.addNewAppointment(data);
                this.openSnackBar("Randevu Başarıyla Oluşturuldu","Tamam")
            }
        })
    };

    getMyAppointments(){

        const dialogCongfig= new MatDialogConfig();
        dialogCongfig.disableClose=false;
        dialogCongfig.autoFocus=true;
        dialogCongfig.data={
            title: "Randevularım"
        };
        const dialogRef=this._dialog.open(GetAppointmentComponent,dialogCongfig)
        
    }
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
      }
}
