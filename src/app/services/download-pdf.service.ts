import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DownloadPdfService {
  constructor() {}

  downloadPdf() {
    // URL-ul către fișierul PDF
    const pdfUrl = '../../../assets/CV.pdf';

    // Descarcă fișierul PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV.pdf'; // Numele cu care va fi salvat fișierul
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
