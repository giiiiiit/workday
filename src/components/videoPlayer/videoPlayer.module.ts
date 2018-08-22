import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";


import { videoPlayerComponent } from './videoPlayer';

@NgModule({
  declarations: [videoPlayerComponent],
  imports: [
    IonicModule
  ],
  exports: [videoPlayerComponent]
})
export class videoPlayerModule {}
