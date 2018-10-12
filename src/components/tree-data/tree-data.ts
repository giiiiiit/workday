import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { treeModel } from './model'

@Component({
  selector: 'tree-data',
  templateUrl: "tree-data.html"
})

/* 组件使用说明
  功能：组织机构树
  入参option字段说明：
              btnText:string类型，右边按钮上的文字，非必填，不填则右边按钮不显示
              clickFn：object类型，点击右边按钮的回调函数，其中参数为当前点击项的相关信息
              nodes：要展示的树形结构数据，必填,数据格式如下：
               [
                  {
                    name: 'root1',
                    bindText: '总人数：10人',
                    level:'/',
                    showChild: false,
                  },
                  {
                    name: 'root2',
                    bindText: '总人数：108人',
                    level: '/',
                    showChild: false,
                    children: [
                      {
                        name: 'childA',
                        bindText: '总人数：10人',
                        level: '/root2',
                        showChild: false,
                        children: [
                          {
                            name: 'childAA',
                            bindText: '总人数：10人',
                            level: '/root2/childA',
                            showChild: false,
                            children: [
                              {
                                name: 'childAAA',
                                level: '/root2/childA/childAA',
                                bindText: '总人数：10人'
                              },
                              {
                                name: 'childAAB',
                                level: '/root2/childA/childAA',
                                bindText: '总人数：10人'
                              }
                            ]
                          },
                          {
                            name: 'childAB',
                            bindText: '总人数：10人',
                            level: '/root2/childA',
                            showChild: false,
                            children: [
                              {
                                name: 'childABA',
                                level: '/root2/childA/childAB',
                                bindText: '总人数：10人',
                              },
                              {
                                name: 'childABB',
                                level: '/root2/childA/childAB',
                                bindText: '总人数：10人',
                              }

                            ]
                          }
                        ]
                      },
                      {
                        name: 'childB',
                        bindText: '总人数：10人',
                        level: '/root2',
                        showChild: false,
                        children: [
                          {
                            name: 'childBA',
                            bindText: '总人数：10人',
                            level: '/root2/childB',
                            showChild: false,
                            children: [
                              {
                                name: 'childBAA',
                                level: '/root2/childB/childBA',
                                bindText: '总人数：10人',
                              },
                              {
                                name: 'childBAB',
                                level: '/root2/childB/childBA',
                                bindText: '总人数：10人',
                              }
                            ]
                          },
                          {
                            name: 'child2BB',
                            bindText: '总人数：10人',
                            level: '/root2/childB',
                            showChild: false,
                            children: [
                              {
                                name: 'childBBA',
                                bindText: '总人数：10人',
                                level: '/root2/childB/child2BB',
                              },
                              {
                                name: 'childBBB',
                                bindText: '总人数：10人',
                                level: '/root2/childB/child2BB',
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]

          
  返回值：无
  用例：<tree-data [nodes]="nodes" [targetPage]="'PageExamplePage'" [paramaName]="'parama'"           [btnText]="'点我切换'"></tree-data>
*/

export class TreeDataComponent {

  @Input() option: treeModel;
  constructor(public navCtrl: NavController) {}

  switchChildren(item){
     item.showChild = !item.showChild;
  }
    
  ngOnInit() {}
 
  
}