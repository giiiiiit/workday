import { Component, Input, ElementRef, ViewChild} from '@angular/core';
import {echartModel } from './model'

import * as echarts from 'echarts'; 

@Component({
  selector: 'echart-tag',
  template: `
  <div class="videoContainer">
    <p class="waterMark" *ngIf="option.watermark==true && option.watermarkType =='text'">{{option.watermarkTextOrUrl}}</p>
    <img class="waterMark" src="{{option.watermarkTextOrUrl}}" alt="" *ngIf="option.watermark==true && option.watermarkType =='img'" style="width: 10%;">
    <div #echart style="width:100%;height: 100%;min-height:200px;min-width:300px!important"></div>
  </div>
  
  `,
})

/* 组件使用说明
  功能：图表组件
  入参option字段说明:
           echartOption：对象类型，图表信息相关的配置，详情参考echart文档，必填
           watermark：boolean型，是否加水印，默认不加，非必填
           watermarkType：字符串枚举类型，水印类型，watermark为true，则必填，text:文字类型水印，img：图片类型水印
           watermarkTextOrUrl：字符串类型，如果水印是文字，则为文字内容，如果水印类型是图片，则为图片Url，watermark为true，则必填
  返回值：无
  用例： <echart-tag [option]="optionLine"></echart-tag>
*/

export class echartComponent {

  @ViewChild('echart') greetDiv: ElementRef;
  @Input() option: echartModel;
  // @Input() option:any;
  // @Input() watermark: boolean;
  // @Input() watermarkType: string;
  // @Input() watermarkTextOrUrl: string;

  constructor() {}
  
  ngOnInit() {  
    const ec = echarts as any;
    const container = this.greetDiv.nativeElement;
    const chart = ec.init(container);
    chart.setOption(this.option.echartOption);
      
  }

}
