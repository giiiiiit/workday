import { Component, Input} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'img-list-viewer-component',
  templateUrl: 'imgListViewer.html'
})
export class imgListViewerComponent {

  @Input() imgList:any;

  constructor(private modalCtrl: ModalController) {
   
  }


  showBigImg(index){    
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.imgList,
      initialSlide: index
    });
    modal.present();
  }


}
