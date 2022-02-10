import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ProjectsService } from './services/projects.service';
import { GestureController } from '@ionic/angular';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Browser } from '@capacitor/browser';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { HomePage } from './views/home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit   {
  @ViewChild('powerBtn', { read: ElementRef }) powerBtn: ElementRef;
  power = 0;
  longPressActive = false;

  constructor(private gestureCtrl: GestureController, private localStorageService:LocalStorageService, private pdfService: PdfService, public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: HomePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngAfterViewInit() {
    const longPress = this.gestureCtrl.create({
      el: this.powerBtn.nativeElement,
      threshold: 0,
      gestureName: 'long-press',
      onStart: ev => {
        this.longPressActive = true;
        this.increase();
      },
      onEnd: ev => {
        this.longPressActive = false;
        if (this.power >= 5) {
          this.downloadAndOpenPdf();
        }
      }
    }, true); // Passing true will run the gesture callback inside of NgZone!

    // Don't forget to enable!
    longPress.enable(true);
    
  }

  increase(timeout = 200) {
    setTimeout(() => {
      if (this.longPressActive) {
        this.power++;
       
        this.increase(timeout);

        console.log(this.power)
        
      }
    }, timeout);

  }

  downloadAndOpenPdf() {
    console.log("xd")
     Browser.open({ url: 'http://localhost:8000/api/projects/downloadPDF' });
  }
  sendPdfToEmail() {
    this.pdfService. sendProjectsPDF().subscribe();
  }


}