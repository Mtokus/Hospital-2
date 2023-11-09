import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/common/shared/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MedicalUnits } from 'src/app/components/models/medical-units.model';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { DataService } from 'src/app/components/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-unit-list',
  standalone: true,
  imports: [SharedModule, MaterialModule, MatTableModule],
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent implements OnInit {

  unitList: MedicalUnits[] = [];
  displayedColumns: string[] = ['index','unitName',"options"];

  dataSource !: MatTableDataSource<MedicalUnits>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _dialog: MatDialog,
    private _dataApi: DataService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getMedicalUnit();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addNewUnit() {
    const dialogCongfig = new MatDialogConfig();
    dialogCongfig.disableClose = false;
    dialogCongfig.autoFocus = true;
    dialogCongfig.data = {
      title: 'Birim Ekle',
    };
    const dialogRef = this._dialog.open(AddUnitComponent, dialogCongfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._dataApi.addNewUnit(data);
        this.openSnackBar('Tıbbi Birim Eklendi', 'Tamam');
      }
    });
  }
  getMedicalUnit() {
    this._dataApi.getMedicalUnits().subscribe((res) => {
      this.unitList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
       
        return data;
      });  console.log(this.unitList);
      this.dataSource=new MatTableDataSource(this.unitList)
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
  
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
