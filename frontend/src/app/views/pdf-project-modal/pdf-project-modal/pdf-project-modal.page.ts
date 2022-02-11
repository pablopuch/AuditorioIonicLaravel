import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendSingleProjectPdfPage } from '../../PdfModals/sendSingleProjectPdf/send-single-project-pdf/send-single-project-pdf.page';
import { DownloadSingleProjectPdfPage } from '../../PdfModals/downloadSingleProjectPdf/download-single-project-pdf/download-single-project-pdf.page';

@Component({
  selector: 'app-pdf-project-modal',
  templateUrl: './pdf-project-modal.page.html',
  styleUrls: ['./pdf-project-modal.page.scss'],
})
export class PdfProjectModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: PdfProjectModalPage,
      handle: false,
  

    });
    return await modal.present();
  }

}
