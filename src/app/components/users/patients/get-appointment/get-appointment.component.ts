import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { AppointmentModel } from 'src/app/components/models/appointment.model';
import { AuthService } from 'src/app/components/services/auth.service';
import { DataService } from 'src/app/components/services/data.service';

@Component({
  selector: 'app-get-appointment',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.scss'],
})
export class GetAppointmentComponent implements OnInit {
  appointmentList: AppointmentModel[] = [];
  localStorage: string;
  userEmail: string;

  constructor(private _dataApi: DataService, private _auth: AuthService) {}

  ngOnInit(): void {
    this.getMyAppointments();
  }
  getMyAppointments() {
    this.userEmail = localStorage.getItem('patientEmail');
    if (this.userEmail) {
      this._dataApi
        .getAppointments()
        .pipe(
          map((appointmentList: any[]) =>
            appointmentList.filter(
              (appointment) => appointment.patientEmail == this.userEmail
            )
          )
        )
        .subscribe((res) => {
          this.appointmentList = res;
          console.log(res);
        });
    } else {
      console.log('patientEmail bulunamadı');
    }
  }
}
