import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-layouts',
    standalone: true,
    templateUrl: './layouts.component.html',
    styleUrls: ['./layouts.component.scss'],
    imports: [SharedModule, NavbarComponent, HomeComponent]
})
export class LayoutsComponent {

}
