import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { PdfService } from 'src/app/services/pdf/pdf.service';

@Injectable({
  providedIn: 'root'
})
export class PdfModalOptionsService {
downloadOrSend : number;
category : number;
  constructor(private pdfService: PdfService) { }

  getOptions() {
  if (this.downloadOrSend == 0) {
    this.downloadAndOpenPdf();
  } else if (this.downloadOrSend == 1) {
    this.sendPdfToEmail();

  };
  }

  downloadAndOpenPdf() {
    console.log("download and open")
    console.log(this.category, " ", this.downloadOrSend)
    switch (this.category) {
  
      case 0:
        console.log(this.category)
        Browser.open({ url: 'http://localhost:8000/api/projects/downloadPDF' });
        break;
      case 1:
        console.log("opcion 2 download");
        break;
    }
  }

  sendPdfToEmail() {
    console.log("email")
    console.log(this.category)
    switch (this.category) {
      case 1:
        this.pdfService.sendProjectsPDF().subscribe();
        break;
      case 2:
        console.log("opcion 2 email");
        break;
    }

  }
}
