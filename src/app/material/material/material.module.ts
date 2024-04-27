import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [ MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,MatSnackBarModule,MatTableModule,MatPaginatorModule,MatMenuModule,
    MatListModule,MatInputModule,MatRadioModule,MatSelectModule,MatDatepickerModule,
    MatDialogModule, MatDividerModule,ReactiveFormsModule,MatGridListModule,MatFormFieldModule
  ],
  exports:[
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,MatSnackBarModule,MatTableModule,MatPaginatorModule,MatMenuModule,
    MatIconModule,MatInputModule,MatRadioModule,MatSelectModule,MatDatepickerModule,
    MatListModule,MatDialogModule, MatDividerModule,ReactiveFormsModule,MatGridListModule,MatFormFieldModule
  ],
  providers: [provideNativeDateAdapter()],
})
export class MaterialModule { }
