import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare let cordova: any;

@Component({
  selector: 'dabase-encryption',
  templateUrl: "dabase.html",
})

export class dabaseComponent {

/* 组件使用说明
  功能：数据库加密
  使用说明：1.使用前需初始化数据库（initDatabase）
           2.可根据修改本文件内的execsql方法传入的sql语句进行对数据库的操作
           3.查询时，若需要返回具体色数据，使用query方法，若只需要一个查询结果(true/false)，请使用execsql方法
  返回值：无
  用例： <dabase-encryption></dabase-encryption>
*/

  strsql: String;
  strsql1: String;
  strsql2: String;
  testsuccess: String;
  testerror: String;
  clearSql:String;
  tableList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  /**
   * 进入表详情页
   */
  goDetail(item){
    this.navCtrl.push("tableDetailComponent", { tableName: item.name});
  }
  ngOnInit() {  
   

    /**
     * 创建数据库myDatabase
     */

    cordova.plugins.TestPlugin.initDatabase("myDatabase", "111111", result => console.log("初始化成功"), error => console.log(error));

    /**
     * 创建数据库myDatabase里的表myTableA
     */
    this.strsql2 = 'create table IF NOT EXISTS myTableA (id char(10),name char(100),tel char(11));';
    cordova.plugins.TestPlugin.execsql("myDatabase", this.strsql2, result => console.log('创建成功:' ), error => console.log(error));

    /**
     * 向myTableA表里添加数据
     */
    this.strsql = 'INSERT INTO myTableA (id,name,tel) VALUES ("1","张三A","15940163262");';
    cordova.plugins.TestPlugin.execsql("myDatabase", this.strsql, result => console.log('插入成功:' ), error => console.log(error));
    this.strsql = 'INSERT INTO myTableA (id,name,tel) VALUES ("2","李四A","15940163262");';
    cordova.plugins.TestPlugin.execsql("myDatabase", this.strsql, result => console.log('插入成功:' ), error => console.log(error));
    this.strsql = 'INSERT INTO myTableA (id,name,tel) VALUES ("3","王五A","15940163262");';
    cordova.plugins.TestPlugin.execsql("myDatabase", this.strsql, result => console.log('插入成功:' ), error => console.log(error));

    /**
    * 创建数据库myDatabase里的表myTableB
    */
    this.strsql2 = 'create table IF NOT EXISTS myTableB (id char(10),name char(100),tel char(11));';
    cordova.plugins.TestPlugin.execsql("myDatabase", this.strsql2, result => console.log('创建成功:' + result), error => console.log(error));

    /**
     * 向myTableB表里添加数据
     */
    this.strsql = 'INSERT INTO myTableB (id,name,tel) VALUES ("1","张三B","15940163262");';
    cordova.plugins.TestPlugin.execsql("myDatabase", this.strsql, result => console.log('插入成功:' + result), error => console.log(error));
    this.strsql = 'INSERT INTO myTableB (id,name,tel) VALUES ("2","李四B","15940163262");';
    cordova.plugins.TestPlugin.execsql("myDatabase", this.strsql, result => console.log('插入成功:' + result), error => console.log(error));
    this.strsql = 'INSERT INTO myTableB (id,name,tel) VALUES ("3","王五B","15940163262");';
    cordova.plugins.TestPlugin.execsql("myDatabase", this.strsql, result => console.log('插入成功:' + result), error => console.log(error));

    
   /**
    * 查询数据库中表名
    *  this.tableList = JSON.stringify(result)
    */
    this.strsql = 'select name from sqlite_master where type="table";';

    cordova.plugins.TestPlugin.query("myDatabase", this.strsql, (result) => {
      this.tableList = result;
    }, error => console.log(error));
    
    /**
     * 查询表中数据
     */
    this.strsql = 'select * from myTableA; ';
    cordova.plugins.TestPlugin.query("myDatabase", this.strsql, result => console.log('myTableB表信息:' + JSON.stringify(result)), error => console.log(error));
  }

}
