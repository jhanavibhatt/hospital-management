import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule } from '@angular/fire/compat';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment.development';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';

// import { AddDoctorComponent } from './component/dashboard/doctor/add-doctor/add-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDoctorComponent } from './component/dashboard/doctor/add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from './component/dashboard/doctor/delete-doctor/delete-doctor.component';
import { ViewDoctorComponent } from './component/dashboard/doctor/view-doctor/view-doctor.component';
import { AddPatientComponent } from './component/dashboard/patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './component/dashboard/patient/delete-patient/delete-patient.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
import { LoginComponent } from './component/auth/login/login.component';
import { ExportComponent } from './component/dashboard/export/export.component';
import { AppointmentComponent } from './component/dashboard/appointment/appointment.component';
import { AddAppointmentComponent } from './component/dashboard/appointment/add-appointment/add-appointment.component';
import { DeleteAppointmentComponent } from './component/dashboard/appointment/delete-appointment/delete-appointment.component';
import { ConfirmDialogComponent } from './component/dashboard/confirm-dialog/confirm-dialog.component';

// import { AddDoctorComponent } from './component/dashboard/doctor/add-doctor/add-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    SidebarComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    ViewDoctorComponent,
    AddPatientComponent,
    DeletePatientComponent,
    ViewPatientComponent,
    LoginComponent,
    ExportComponent,
    AppointmentComponent,
    AddAppointmentComponent,
    DeleteAppointmentComponent,
    ConfirmDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule, 
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync(),
    // { provide: 'AddDoctorComponent', useValue: AddDoctorComponent }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
