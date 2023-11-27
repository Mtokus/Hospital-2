import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _authService: AngularFireAuth, private _router: Router) {}

  login(email: string, password: string) {
    this._authService.signInWithEmailAndPassword(email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('token', 'true');
        localStorage.setItem('patientEmail', user.email);
        localStorage.setItem("displayName",user.displayName)

        this._router.navigate(['']);

        console.log(user);
      },
      (err) => {
        alert('Login başarılı değil');
        this._router.navigate(['/login']);
      }
    );
  }
  register(displayName: string, email: string, password: string) {
    return this._authService
      .createUserWithEmailAndPassword(email, password)
      .then(
        (userCredential) => {
          alert('Kayıt Başarılı');
          const user = userCredential.user;

          return user.updateProfile({
            displayName: displayName,
          });
        },
        (err) => {
          alert(err.message);
          this._router.navigate(['/register']);
        }
      );
  }

  // getAppointmentByEmail(email:string) : Observable<AppointmentModel>{
  //   return this._authService.
  // }
}
