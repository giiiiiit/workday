import { Component, Input, ElementRef, ViewChild  } from '@angular/core';

import * as echarts from 'echarts'; 

@Component({
  selector: 'echart-pie',
  template: `
  <div style="min-height:200px;height:200px">
    <div #echartPie style="width:100%;height: 100%;"></div>
  </div>
  `,
})

export class echartPieComponent {

  @ViewChild('echartPie') greetDiv: ElementRef;

  @Input() option:any;

  
  constructor() {
   
  
  }


  ngOnInit () {  
    this.option.series[0].type = "pie";
    const ec = echarts as any;
    const container =this.greetDiv.nativeElement;
    const chart = ec.init(container);
    chart.setOption(this.option);

  }


}
