import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, MaterialModule, NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  color: string;
  cols: number;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
