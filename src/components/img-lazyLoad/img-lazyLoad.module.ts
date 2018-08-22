import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";


import { imgLazyLoadComponent } from './img-lazyLoad';

@NgModule({
  declarations: [imgLazyLoadComponent],
  imports: [
    IonicModule
  ],
  exports: [imgLazyLoadComponent]
})
export class imgLazyLoadModule {}
