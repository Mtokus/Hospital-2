import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,MatNativeDateModule,MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,MatNativeDateModule,MatButtonModule,
    MatSnackBarModule
  ],
})
export class MaterialModule {}
