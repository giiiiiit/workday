import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { comonentsDemoZxjPage } from './components-demo-zxj';
import { ComponentExampleModule } from '../../components/component-example/component-example.module';

//组件部分
import { SlidesModule } from '../../components/slides/slides.module';
import { imgListViewerModule } from '../../components/imgListViewer/imgListViewer.module';
import { PDFReaderModule } from '../../components/pdf-reader/pdf-reader.module';
import { videoPlayerModule } from '../../components/videoPlayer/videoPlayer.module';
import { EchartModule } from '../../components/echart/echart.module';
import { imgLazyLoadModule } from '../../components/img-lazyLoad/img-lazyLoad.module';
import { treeDataModule } from '../../components/tree-data/tree-data.module';
import { uploadIimgVideoFileModule } from '../../components/upload-img-video-file/upload-img-video-file.module';
// import { InViewportModule,WindowRef } from '@thisissoon/angular-inviewport';
const providers = [
  // { provide: WindowRef, useValue: window }
];
@NgModule({
  declarations: [
    comonentsDemoZxjPage,
  ],
  imports: [
    IonicPageModule.forChild(comonentsDemoZxjPage),
    ComponentExampleModule,
    SlidesModule,
    imgListViewerModule,
    PDFReaderModule,
    videoPlayerModule,
    EchartModule,
    imgLazyLoadModule,
    treeDataModule,
    uploadIimgVideoFileModule,
    // InViewportModule.forRoot(providers)
  ],
})
export class comonentsDemoZxjModule {}
