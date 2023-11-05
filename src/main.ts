import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { routes } from './app/router';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { environment } from './environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      RouterModule.forRoot(routes),
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireStorageModule,
      AngularFireDatabaseModule,
      AngularFireAuth,
      AngularFirestore,
      BrowserAnimationsModule,
      HttpClient
    ),
    provideAnimations(),
  ],
});
