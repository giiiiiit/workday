import { Component, Input,ViewChild} from '@angular/core';

@Component({
  selector: 'videoPlayer-component',
  templateUrl: 'videoPlayer.html'
})

/* 组件使用说明
  功能：视频播放器
  入参说明：videoSrc：字符串类型，视频地址，必填
           loop：boolean型，是否自动循环播放，默认不自动循环播放，不必填
           watermark：boolean型，是否加水印，默认不加，非必填
           watermarkType：字符串枚举类型，水印类型，watermark为true，则必填，text:文字类型水印，img：图片类型水印
           watermarkTextOrUrl：字符串类型，如果水印是文字，则为文字内容，如果水印类型是图片，则为图片Url，watermark为true，则必填
  返回值：无
  用例： <videoPlayer-component [videoSrc] ="'http://static.videogular.com/assets/videos/videogular.mp4'"
         [loop]="true" [watermark]="true"[watermarkType]="'img'" [watermarkTextOrUrl]="'https://t10.baidu.com/it/u=442769412,4197463608&fm=76'"></videoPlayer-component>
*/

export class videoPlayerComponent {
 
  @Input() videoSrc:string;
  @Input() loop: boolean;
  @Input() watermark: boolean;
  @Input() watermarkType:string;
  @Input() watermarkTextOrUrl: string;
 
  constructor() {}
  ngOnInit(){
    if(this.watermark == true){
      this.addWaterMark(this.watermarkType, this.watermarkTextOrUrl)
    }

  }
  addWaterMark(type,content){
    console.log("调用水印函数" +type+":"+ content)
  }
  


}
