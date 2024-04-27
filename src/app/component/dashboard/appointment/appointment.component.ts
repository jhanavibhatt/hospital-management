import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataService } from '../../../shared/service/data.service';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from '../../../shared/model/doctor';
import { Appointment } from '../../../shared/model/appointment';
import { DeleteAppointmentComponent } from './delete-appointment/delete-appointment.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  
  }

