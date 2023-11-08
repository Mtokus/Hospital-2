import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-result-analysis',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './result-analysis.component.html',
  styleUrls: ['./result-analysis.component.scss']
})
export class ResultAnalysisComponent {

}
