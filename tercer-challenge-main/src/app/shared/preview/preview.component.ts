import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {

  constructor(private ms: ModalService) { }

  isVisible () {return this.ms.isVisible}
  close = () => this.ms.closeModal()

  async downloadPDF() {
    const element = document.getElementById('preview')!;
    const canvas = await html2canvas(element);
    const img = canvas.toDataURL('image/PNG');
    const bufferX = 10;
    const bufferY = 10;
    const doc = new jsPDF('p', 'pt', 'a4');
    const imgProps = (doc as any).getImageProperties(img);
    const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    doc.addImage(
      img,
      'PNG',
      bufferX,
      bufferY,
      pdfWidth,
      pdfHeight,
      undefined,
      'FAST'
    );
    doc.save(`${new Date().toISOString()}_tutorial.pdf`);
  }
}
