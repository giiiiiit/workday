import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

import { fileUploadComponent } from './file-upload';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@NgModule({
	declarations: [fileUploadComponent],
  imports: [IonicModule, PdfViewerModule],
  exports: [fileUploadComponent],
  providers: [FileTransfer,FileTransferObject,File]
})
export class fileUploadModule {}
