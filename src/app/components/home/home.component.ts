import { Component, OnInit } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { DataService } from '../services/data.service';
import { HospitalModel } from '../models/hospital.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, MaterialModule, NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hospitalList: HospitalModel[] = [];
  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  color: string;
  cols: number;

  constructor(
    config: NgbCarouselConfig,
    private _dataApi:DataService,

    ) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
    this.getAllHospitals()
  }
  getAllHospitals() {
    this._dataApi.getAllHospitals().subscribe((res) => {
      this.hospitalList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
}
