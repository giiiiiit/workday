import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'echarts',
    templateUrl: 'echarts.html',
})
export class EchartsPage {
  activeTab= '0';
  totalUpload = 0;
  showAllSelect = true;
  optionLine: object;
  optionLine2: object;
  optionLine3: object;
  optionLine4: object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionLine = {
        echartOption: {
            title: {
                text: '历史审核问题数统计'
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        },
        watermark: false
    }

    this.optionLine2 = {
        echartOption: {
            title: {
                text: '雷达图'
            },
            tooltip: {},
            legend: {
                // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                   }
                },
                indicator: [
                   { name: '2016上半年', max: 6500},
                   { name: '2016下半年', max: 16000},
                   { name: '2017上半年', max: 30000},
                   { name: '2017上半年', max: 38000},
                   { name: '2018上半年', max: 52000},
                   { name: '2018上半年', max: 25000},
                   { name: '2019上半年', max: 52000},
                   { name: '2019上半年', max: 25000},
                   { name: '2020上半年', max: 52000},
                   { name: '2020上半年', max: 25000}
                ]
            },
            series: [{
                name: '',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : ''
                    },
                    //  {
                    //     value : [5000, 14000, 28000, 31000, 42000, 21000],
                    //     name : '实际开销（Actual Spending）'
                    // }
                ]
            }]
        },
        watermark: false
    }

    this.optionLine3 = {
        echartOption: {
            title : {
                text: '历史审核问题数统计'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // legend: {
            //     orient: 'vertical',
            //     left: 'left',
            //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            // },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'审核主题1'},
                        {value:310, name:'审核主题2'},
                        {value:234, name:'审核主题3'},
                        {value:135, name:'审核主题4'},
                        {value:335, name:'审核主题5'},
                        {value:310, name:'审核主题6'},
                        {value:234, name:'审核主题7'},
                        {value:135, name:'审核主题8'},
                        {value:135, name:'审核主题8'},
                        {value:1548, name:'审核主题10'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        },
        watermark: false
    }

    this.optionLine4 = {
        echartOption: {
            title: {
                text: '雷达图'
            },
            tooltip: {},
            legend: {
                // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                   }
                },
                indicator: [
                   { name: '审核主题1', max: 6500},
                   { name: '审核主题2', max: 16000},
                   { name: '审核主题3', max: 30000},
                   { name: '审核主题4', max: 38000},
                   { name: '审核主题5', max: 52000},
                   { name: '审核主题6', max: 25000},
                   { name: '审核主题7', max: 52000},
                   { name: '审核主题8', max: 25000},
                   { name: '审核主题9', max: 52000},
                   { name: '审核主题10', max: 25000}
                ]
            },
            series: [{
                name: '',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : ''
                    },
                    //  {
                    //     value : [5000, 14000, 28000, 31000, 42000, 21000],
                    //     name : '实际开销（Actual Spending）'
                    // }
                ]
            }]
        },
        watermark: false
    }
  }

    

  switchTab(str){
    this.activeTab = str;
  }

  back(){
    this.navCtrl.pop();
  }



}
