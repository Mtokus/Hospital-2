import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-patient-information',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent {

}
