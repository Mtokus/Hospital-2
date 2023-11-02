import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { BlankComponent } from "../../../../../common/shared/components/blank/blank.component";

@Component({
    selector: 'app-doctor-list',
    standalone: true,
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.scss'],
    imports: [SharedModule, BlankComponent]
})
export class DoctorListComponent {
  title:"Doktor Listesi"
  sectionTitle:"Doktorlar"
}
