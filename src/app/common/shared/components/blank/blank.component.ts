import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent {
  @Input() title: string = "";
  @Input() sectionTitle:string ="";
  

}