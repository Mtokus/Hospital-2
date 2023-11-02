import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { AdminNavbarComponent } from "./components/admin-navbar/admin-navbar.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    imports: [SharedModule, AdminNavbarComponent]
})
export class AdminComponent {

}
