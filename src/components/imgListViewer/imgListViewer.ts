import { Component, Input} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { imgViewerModel} from './model'

@Component({
  selector: 'img-list-viewer-component',
  templateUrl: 'imgListViewer.html'
})
export class imgListViewerComponent {

  @Input() imgList: imgViewerModel[];

  constructor(private modalCtrl: ModalController) {
   
  }


  showBigImg(index){  
    let shouList = [];  
    console.log("this.imgList", this.imgList);
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
