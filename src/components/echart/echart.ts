import { Component, Input, ElementRef, ViewChild} from '@angular/core';

import * as echarts from 'echarts'; 

@Component({
  selector: 'echart-tag',
  template: `
  <div class="videoContainer">
    <p class="waterMark" *ngIf="watermark==true && watermarkType =='text'">{{watermarkTextOrUrl}}</p>
    <img class="waterMark" src="{{watermarkTextOrUrl}}" alt="" *ngIf="watermark==true && watermarkType =='img'" style="width: 10%;">
    <div #echart style="width:100%;height: 100%;min-height:200px;min-width:300px!important"></div>
  </div>
  
  `,
})

/* 组件使用说明
  功能：图表组件
  入参说明：option：对象类型，图表信息相关的配置，详情参考echart文档，必填
           watermark：boolean型，是否加水印，默认不加，非必填
           watermarkType：字符串枚举类型，水印类型，watermark为true，则必填，text:文字类型水印，img：图片类型水印
           watermarkTextOrUrl：字符串类型，如果水印是文字，则为文字内容，如果水印类型是图片，则为图片Url，watermark为true，则必填
  返回值：无
  用例： <echart-tag [option]="option" [watermark]="true" [watermarkType]="'img'"  
         [watermarkTextOrUrl]="'https://t10.baidu.com/it/u=442769412,4197463608&fm=76'"></echart-tag>
*/
export class echartComponent {

  @ViewChild('echart') greetDiv: ElementRef;
  @Input() option:any;
  @Input() watermark: boolean;
  @Input() watermarkType: string;
  @Input() watermarkTextOrUrl: string;

  constructor() {}
  
  ngOnInit() {  
    const ec = echarts as any;
    const container = this.greetDiv.nativeElement;
    const chart = ec.init(container);
    chart.setOption(this.option);
    if (this.watermark == true) {
      this.addWaterMark(this.watermarkType, this.watermarkTextOrUrl)
    }    
  }
  addWaterMark(type, content) {
    console.log("调用水印函数" + type + ":" + content)
  }
}
