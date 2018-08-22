import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";
import { FileChooser } from '@ionic-native/file-chooser';

import { uploadIimgVideoFileComponent } from './upload-img-video-file';
import { ImgService} from './ImgService'
import { NoticeService } from './noticeService'
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [uploadIimgVideoFileComponent],
  imports: [
    IonicModule
  ],
  providers: [
    ImgService, NoticeService, FileChooser, Camera
  ],
  exports: [uploadIimgVideoFileComponent]
})
export class uploadIimgVideoFileModule {}
