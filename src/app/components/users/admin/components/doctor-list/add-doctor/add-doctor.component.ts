import { Component } from '@angular/core';

import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent {
  addNewDoctor() {}
}
