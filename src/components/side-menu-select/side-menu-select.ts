import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* 组件使用说明
  功能：侧滑联机列表
  入参说明： data：数组类型，手写板配置项，必填data = [{id: '1', title: '99成新}];
            title: string类型， 列表标题，非必填
            styleWidth: string类型， 侧滑菜单的宽度，非必填
  返回值：onChange()  返回所选中列表的对象键值对  {id: '1', title: '99成新}
  方法： open(), close()
  用例： 侧滑菜单因z-index关系，需放在ion-content标签之外
        <side-menu-select  [data]="selectData" #sidemenuselect (onChange)="selectChange($event)"></side-menu-select>
*/
@IonicPage()
@Component({
  selector: 'side-menu-select',
  templateUrl: 'side-menu-select.html',
})
export class SideMenuSelectComponent {
  showMenu: boolean = false;
  showMask: boolean = true;
  widths: string;
  titles: string;
  status: number | string;
  @Input() data: Array<Object>;
  @Input() title: string;
  @Input() styleWidth: string;
  @Output() onChange = new EventEmitter<Object>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.widths = this.styleWidth || '65%';
    this.titles = this.title || '请选择';
  }
  chooseItem(id, title) {
    if (this.status === id) return; 
    this.status = id;
    this.onChange.emit({id: id, title: title});
  }
  public open() {
    this.showMask = false;
    setTimeout(() => {
      this.showMenu = true;
    },0)
  }
  public close() {
    this.showMenu = false;
    setTimeout(() => {
      this.showMask = true;
    },300)
  }
}
