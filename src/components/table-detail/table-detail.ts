import { Component} from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
declare let cordova: any;
@IonicPage()
@Component({
  selector: 'table-detail',
  templateUrl:"table-detail.html"
  ,
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

export class tableDetailComponent {

  tableName: String; 
  strsql: String;
  dataList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  /**
  * 返回函数
  */
  back() {
    this.navCtrl.pop();
  }
  ngOnInit() {  
    this.tableName = this.navParams.get('tableName');
    /**
    * 查询表中数据
    */
    this.strsql = 'select * from '+this.tableName+";";
    cordova.plugins.TestPlugin.query("myDatabase", this.strsql, (result) => {
      this.dataList = result;
    }, error => console.log(error));
  }

}
