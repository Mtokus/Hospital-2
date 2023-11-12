import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NavbarPatientComponent } from "./navbar-patients/navbar-patients.component";
import { MaterialModule } from 'src/app/common/shared/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';

@Component({
    selector: 'app-patients',
    standalone: true,
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    imports: [SharedModule, NavbarPatientComponent,MaterialModule]
})
export class PatientsComponent {

    constructor(
        private _dialog:MatDialog
    ){}
    CreateAppointment(){
        const dialogCongfig= new MatDialogConfig();
        dialogCongfig.disableClose=true;
        dialogCongfig.autoFocus=true;
        dialogCongfig.data={
            title: "Randevu Al"
        };
        const dialogRef=this._dialog.open(CreateAppointmentComponent,dialogCongfig)
    };
    
}
