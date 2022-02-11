import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ProjectsService } from './services/projects.service';
import { GestureController, MenuController } from '@ionic/angular';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Browser } from '@capacitor/browser';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { HomePage } from './views/home/home.page';
import { PDFModalMenuPage } from './views/PDF-modal-menu/projects-pdf-menu/pdf-modal-menu.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('holdBtn', { read: ElementRef }) holdBtn: ElementRef;
  hold = 0;
  longPressActive = false;
  menuController: MenuController;

  constructor(private router: Router, private gestureCtrl: GestureController, private localStorageService: LocalStorageService, private pdfService: PdfService, private modalController: ModalController) { }

  ngOnInit() {

  }


  ngAfterViewInit() {
    console.log(this.holdBtn)
    const longPress = this.gestureCtrl.create({
      el: this.holdBtn.nativeElement,
      threshold: 0,
      gestureName: 'long-press',
      onStart: ev => {
        this.longPressActive = true;
        this.increase();

      },
      onEnd: ev => {
        this.longPressActive = false;

      }
    }, true); // Passing true will run the gesture callback inside of NgZone!

    // Don't forget to enable!
    longPress.enable(true);

  }

  increase(timeout = 200) {
    setTimeout(() => {
      if (this.longPressActive) {
        this.hold++;

        this.increase(timeout);

      }
    }, timeout);
    if (this.hold == 4) {
      this.openModal();
      this.hold = 0;
    }
  }

  // async openModal() {
  //   console.log("ey")
  //   const modal = await this.modalController.create({
  //     component: PDFModalMenuPage,
  //     cssClass: 'my-custom-class',
  //     swipeToClose: true,
  //     presentingElement: await this.modalController.getTop(),

  //   });
  //   return await modal.present();
  // }

  async openModal() {
    const modal = await this.modalController.create({
      component: PDFModalMenuPage,
      handle: false,
      initialBreakpoint: 0.16,
      breakpoints: [0, 0.16],

    });
    return await modal.present();
  }


}