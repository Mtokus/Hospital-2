import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  displayName: string;
  email: string;
  password: string;
  constructor(private _auth: AuthService) {}

  register() {
    if (this.displayName == '') {
      alert('lütfen İsim Soyisim Giriniz');
      return;
    }
    if (this.email == '') {
      alert('lütfen E-mail Giriniz');
      return;
    }
    if (this.password == '') {
      alert('lütfen Şifre Giriniz');
      return;
    }
    this._auth.register(this.displayName, this.email, this.password);
  }
}
