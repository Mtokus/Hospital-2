import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-get-appointment',
  standalone: true,
  imports: [SharedModule,MaterialModule],
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.scss']
})
export class GetAppointmentComponent {

}
