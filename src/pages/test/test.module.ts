import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';

import { SampleSignaturepadModule } from '../../components/sample-signaturepad/sample-signaturepad.module';
import { ComponentMapModule } from '../../components/component-map/component-map.module';
import { InfiniteScrollModule } from '../../components/ion-infinite-scroll/ion-infinite-scroll.module';
import { SelectModule } from '../../components/select/select.module';
import { SideMenuSelectModule } from '../../components/side-menu-select/side-menu-select.module';

import { SlidesModule } from '../../components/slides/slides.module';
import { imgListViewerModule } from '../../components/imgListViewer/imgListViewer.module';
import { PDFReaderModule } from '../../components/pdf-reader/pdf-reader.module';
import { videoPlayerModule } from '../../components/videoPlayer/videoPlayer.module';
import { EchartModule } from '../../components/echart/echart.module';

import { imgLazyLoadModule } from '../../components/img-lazyLoad/img-lazyLoad.module';
import { treeDataModule } from '../../components/tree-data/tree-data.module';
@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    SampleSignaturepadModule,
    ComponentMapModule,
    InfiniteScrollModule,
    SelectModule,
    SideMenuSelectModule,
    
    SlidesModule,
    imgListViewerModule,
    PDFReaderModule,
    videoPlayerModule,
    EchartModule,
    imgLazyLoadModule,
    treeDataModule,
  ]
})
export class TestPageModule {}
