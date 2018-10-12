import { Component, Input} from '@angular/core';
import { videoPlayerModel } from './model'

@Component({
  selector: 'videoPlayer-component',
  templateUrl: 'videoPlayer.html'
})

/* 组件使用说明
  功能：视频播放器
  入参option字段说明：
           videoSrc：字符串类型，视频地址，必填
           loop：boolean型，是否自动循环播放，默认不自动循环播放，不必填
           watermark：boolean型，是否加水印，默认不加，非必填
           watermarkType：字符串枚举类型，水印类型，watermark为true，则必填，text:文字类型水印，
           img：图片类型水印
           watermarkTextOrUrl：字符串类型，如果水印是文字，则为文字内容，如果水印类型是图片，则为图片Url，watermark为true，则必填
  返回值：无
  用例： <videoPlayer-component [option]="videoOPtion"></videoPlayer-component>
*/

export class videoPlayerComponent {
 

  @Input() option: videoPlayerModel;
 
  constructor() {}
  ngOnInit(){    
    if (this.option.poster == undefined){
      this.option.poster = ''
    }

  }
 
  


}
