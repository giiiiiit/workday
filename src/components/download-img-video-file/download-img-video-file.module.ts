import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";

import { downloadIimgVideoFileComponent } from './download-img-video-file';

@NgModule({
  declarations: [downloadIimgVideoFileComponent],
  imports: [
    IonicModule
  ],
  providers: [],
  exports: [downloadIimgVideoFileComponent]
})
export class downloadIimgVideoFileModule {}
