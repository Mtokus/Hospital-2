import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NavbarPatientComponent } from "./navbar-patients/navbar-patients.component";

@Component({
    selector: 'app-patients',
    standalone: true,
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    imports: [SharedModule, NavbarPatientComponent]
})
export class PatientsComponent {

}
