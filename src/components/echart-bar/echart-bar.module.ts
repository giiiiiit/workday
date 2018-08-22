import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";


import { echartBarComponent } from './echart-bar';

@NgModule({
  declarations: [echartBarComponent],
  imports: [
    IonicModule
  ],
  exports: [echartBarComponent]
})
export class EchartBarModule {}
