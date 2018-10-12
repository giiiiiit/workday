import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { EchartsPage } from './echarts';
import { EchartModule } from '../../../components/echart/echart.module';

@NgModule({
  declarations: [
    EchartsPage,
  ],
  imports: [
    FormsModule,
    EchartModule,
    CommonModule,
    IonicModule,
    IonicPageModule.forChild(EchartsPage),
  ],
})
export class EchartsModule {}
