import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PdfService {



  sendProjects: string = "http://localhost:8000/api/projects/sendPDF";
downloadProjects : string = "http://localhost:8000/api/projects/downloadPDF";

  constructor(private httpClient: HttpClient) { }

  sendProjectsPDF() {
    console.log( this.httpClient.get(this.sendProjects))
    return this.httpClient.get(this.sendProjects);
  }
  getProjectsPDF() {
    console.log( this.httpClient.get(this.downloadProjects))
    return this.httpClient.get(this.downloadProjects, httpOptions);
  }
}
