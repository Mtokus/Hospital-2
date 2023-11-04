import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';


@Component({
    selector: 'app-doctor-list',
    standalone: true,
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.scss'],
    imports: [SharedModule]
})
export class DoctorListComponent {
  
}
