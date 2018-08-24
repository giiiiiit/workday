import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageExamplePage } from './page-example';

import { SlidesModule } from '../../components/slides/slides.module';
import { imgListViewerModule } from '../../components/imgListViewer/imgListViewer.module';
import { PDFReaderModule } from '../../components/pdf-reader/pdf-reader.module';
import { videoPlayerModule } from '../../components/videoPlayer/videoPlayer.module';
import { EchartPieModule } from '../../components/echart-pie/echart-pie.module';
import { EchartBarModule } from '../../components/echart-bar/echart-bar.module';
import { EchartLineModule } from '../../components/echart-line/echart-line.module';
import { imgLazyLoadModule } from '../../components/img-lazyLoad/img-lazyLoad.module';
import { treeDataModule } from '../../components/tree-data/tree-data.module';
import { uploadIimgVideoFileModule } from '../../components/upload-img-video-file/upload-img-video-file.module';
import { ComponentMapModule } from '../../components/component-map/component-map.module';
import { SampleSignaturepadModule } from '../../components/sample-signaturepad/sample-signaturepad.module';
import { InfiniteScrollModule } from '../../components/ion-infinite-scroll/ion-infinite-scroll.module';

@NgModule({
  declarations: [
    PageExamplePage
  ],
  imports: [
    IonicPageModule.forChild(PageExamplePage),
    SlidesModule,
    imgListViewerModule,
    PDFReaderModule,
    videoPlayerModule,
    EchartPieModule,
    EchartBarModule,
    EchartLineModule,
    imgLazyLoadModule,
    treeDataModule,
    uploadIimgVideoFileModule,
    SampleSignaturepadModule,
    ComponentMapModule,
    InfiniteScrollModule
  ],
})
export class PageExamplePageModule {}
