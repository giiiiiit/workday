import { Component, Input, ElementRef, ViewChild} from '@angular/core';

import * as echarts from 'echarts'; 

@Component({
  selector: 'echart-line',
  template: `
  <div style="min-height:200px;height:200px">
    <div #echartLine style="width:100%;height: 100%;"></div>
  </div>
  `,
})

export class echartLineComponent {
 
  @ViewChild('echartLine') greetDiv: ElementRef;
  @Input() option:any;
 

  
  constructor() {
  
  }
  ngOnInit() {  
 
    this.option.series[0].type = "line";
    const ec = echarts as any;
    const container = this.greetDiv.nativeElement;
    const chart = ec.init(container);
    chart.setOption(this.option);
  
    
  }

}
