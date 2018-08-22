import { Component, Input,ViewChild} from '@angular/core';



@Component({
  selector: 'videoPlayer-component',
  templateUrl: 'videoPlayer.html'
})

export class videoPlayerComponent {
 
  @Input() videoSrc:string;
  @Input() loop: boolean;
  

  constructor() {
    console.log('slides-component');
  
  }


}
