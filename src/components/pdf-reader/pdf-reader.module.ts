import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

import { PDFReaderComponent } from './pdf-reader';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@NgModule({
	declarations: [PDFReaderComponent],
  imports: [IonicModule, PdfViewerModule],
  exports: [PDFReaderComponent],
  providers: [FileTransfer,FileTransferObject,File]
})
export class PDFReaderModule {}
