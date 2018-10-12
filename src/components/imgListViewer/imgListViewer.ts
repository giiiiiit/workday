import { Component, Input} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { imgViewerModel} from './model'

@Component({
  selector: 'img-list-viewer-component',
  templateUrl: 'imgListViewer.html'
})

/* 组件使用说明
  功能：相册图片查看器-大图查看
  入参说明：imgList：对象数组，要轮播的图片信息，必填,数据格式如下：
            [{ url: "assets/imgs/slide1.jpg", urlBig: "assets/imgs/slide1.jpg" }, 
            { url: "assets/imgs/slide1.jpg", urlBig: "assets/imgs/slide1.jpg" }, 
            { url: "assets/imgs/slide2.jpg", urlBig: "assets/imgs/slide2.jpg" },
             { url: "assets/imgs/slide3.jpg", urlBig: "assets/imgs/slide3.jpg" }];
  返回值：无
  用例：<img-list-viewer-component [imgList]="imgList2"></img-list-viewer-component>
*/
export class imgListViewerComponent {

  @Input() imgList: imgViewerModel[];

  constructor(private modalCtrl: ModalController) {}

  showBigImg(index){  
    let shouList = [];  
    this.imgList.forEach(function (item) {
      if(item.urlBig !=undefined){
        shouList.push({ url: item.urlBig});
      }else{
        shouList.push({ url: item.url })
      }
    });
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: shouList,
      initialSlide: index
    });
    modal.present();
  }


}
