import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'navbar-patients',
  standalone: true,
  imports: [SharedModule,MaterialModule],
  templateUrl: './navbar-patients.component.html',
  styleUrls: ['./navbar-patients.component.scss']
})
export class NavbarPatientComponent {

}
