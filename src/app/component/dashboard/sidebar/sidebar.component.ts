import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../../shared/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private breakpointObserver: BreakpointObserver,private authApi : AuthService,public dialog: MatDialog) {} // Inject BreakpointObserver in the constructor

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  
    logout() {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: { title: 'Confirm', message: 'Are you sure you want to sign out?' }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.authApi.logout();
        }
      });
      //this.authApi.logout();
    }
}
