import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";
import { FileChooser } from '@ionic-native/file-chooser';

import { uploadIimgVideoFileComponent } from './upload-img-video-file';
import { FileTransfer} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { NoticeService } from './noticeService'
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [uploadIimgVideoFileComponent],
  imports: [
    IonicModule
  ],
  providers: [
    NoticeService, FileChooser, Camera, FileTransfer, File
  ],
  exports: [uploadIimgVideoFileComponent]
})
export class uploadIimgVideoFileModule {}
