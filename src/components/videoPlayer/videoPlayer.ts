import { Component, Input,ViewChild} from '@angular/core';



@Component({
  selector: 'videoPlayer-component',
  templateUrl: 'videoPlayer.html'
})

export class videoPlayerComponent {
 
  @Input() videoSrc:string;
  @Input() loop: boolean;
  @Input() watermark: boolean;
  @Input() watermarkType:string;
  @Input() watermarkTextOrUrl: string;
 
  

  constructor() {
    console.log('slides-component');
  
  }
  ngOnInit(){
    if(this.watermark == true){
      this.addWaterMark(this.watermarkType, this.watermarkTextOrUrl)
    }

  }
  addWaterMark(type,content){
    console.log("调用水印函数" +type+":"+ content)
  }
  


}
