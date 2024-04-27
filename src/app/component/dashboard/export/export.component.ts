import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrl: './export.component.css'
})
export class ExportComponent {
  export_report:any[]=[];

  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  selectedMonth: string = '';
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  //   this.fetchDataFromFirebase();
  //  }
  //  fetchDataFromFirebase(): void {
  //   this.firestore.collection('export-report').valueChanges().subscribe(reports => {
  //     console.log(reports);
      
  //       this.export_report = reports;
  //       this.downloadPDF();
  //   });
}

downloadPDF(): void {
 
  }
}

