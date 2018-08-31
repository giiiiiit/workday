import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'tree-data',
  templateUrl: "tree-data.html"
})

/* 组件使用说明
  功能：组织机构树
  入参说明：nodes：要展示的树形结构数据，必填,数据格式如下：
                  nodes = [
                            {
                              name: 'root1',
                              peopleNum: 10,
                              childrenCopy: [],
                              showChild: false,

                            },
                            {
                              name: 'root2',
                              peopleNum: 10,
                              childrenCopy: [],
                              showChild: false,
                              children: [
                                {
                                  name: 'childA',
                                  peopleNum: 10,
                                  showChild: false,
                                  children: [
                                    {
                                      name: 'childAA',
                                      peopleNum: 10,
                                      showChild: false,
                                    },
                                    {
                                      name: 'childAB',
                                      peopleNum: 10,
                                      showChild: false,
                                    }
                                  ]
                                },
                                {
                                  name: 'childB',
                                  peopleNum: 10,
                                  showChild: false,
                                  children: [
                                    {
                                      name: 'childBA',
                                      peopleNum: 10,
                                      showChild: false,
                                    },
                                    {
                                      name: 'child2BB',
                                      peopleNum: 10,
                                      showChild: false,
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
           targetPage：各部门名称右侧按钮文字，非必填，不填按钮不现实
           targetPage：点击各部门名称右侧按钮时，要跳到的页面 ，targetPage填，则必填，否则不必填
           paramaName：点击各部门名称右侧按钮时，要跳到指定页面时的参数名称（会把点击部门的信息以参数的形式传过去），targetPage填，则必填，否则不必填
  返回值：无
  用例：<tree-data [nodes]="nodes" [targetPage]="'PageExamplePage'" [paramaName]="'parama'"           [btnText]="'点我切换'"></tree-data>
*/

export class TreeDataComponent {


  @Input() targetPage: string;
  @Input() paramaName: string;
  @Input() btnText: string;
  @Input() nodes : any;

  constructor(public navCtrl: NavController) {}

  switchChildren(item){
    item.showChild = !item.showChild;
  }
  
  viewOrg(item) {
    let parama = {};
    parama[this.paramaName] = item;
    this.navCtrl.push(this.targetPage, parama);
  }

  ngOnInit() {}
 
  
}