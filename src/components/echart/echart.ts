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

export class echartComponent {

  @ViewChild('echart') greetDiv: ElementRef;
  @Input() option:any;
  @Input() watermark: boolean;
  @Input() watermarkType: string;
  @Input() watermarkTextOrUrl: string;

  
  constructor() {
  
  }
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
