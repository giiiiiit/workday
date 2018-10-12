import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";


import { dabaseComponent } from './dabase';

@NgModule({
  declarations: [dabaseComponent],
  imports: [
    IonicModule
  ],
  exports: [dabaseComponent]
})
export class dabaseModule {}
