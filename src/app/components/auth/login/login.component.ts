import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  displayName:string;
  email:string;
  password:any
constructor(
  private _auth:AuthService
){}

login(){

  if(this.email==""){
    alert ("lütfen E-mail Giriniz")
    return;
  }
  if(this.password==""){
    alert ("lütfen Şifre Giriniz")
    return;

  }
  this._auth.login(this.email,this.password);
 

  
}

}
