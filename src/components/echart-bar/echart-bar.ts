import { Component, Input, ElementRef, ViewChild} from '@angular/core';

import * as echarts from 'echarts'; 

@Component({
  selector: 'echart-bar',
  template: `
  <div style="min-height:200px;height:200px">
    <div #echartBar style="width:100%;height: 100%;"></div>
  </div>
  `,
})

export class echartBarComponent {

  @ViewChild('echartBar') greetDiv: ElementRef;
  @Input() option:any;
 

  
  constructor() {
  
  }
  ngOnInit() {  
    this.option.series[0].type = "bar";
    const ec = echarts as any;
    const container = this.greetDiv.nativeElement;
    const chart = ec.init(container);
    chart.setOption(this.option);

  
    
  }

}
