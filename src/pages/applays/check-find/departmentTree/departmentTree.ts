import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'departmentTree',
  templateUrl: 'departmentTree.html',
})

/**
 * 业务功能：选择审核企业时跳转到本页，本页显示所有企业、部门树形结构图
 */
export class departmentTreePage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  back() {
    this.viewCtrl.dismiss();
  }
  


  dismiss(data){
    this.viewCtrl.dismiss({ department: data });
    // this.navCtrl.push("checkFindAddPage",{department:data});

 }
   
 /**
  * 树形结构初始化
  */

  treeDataOption = {
    nodes: [
      {
        name: 'root1',
        bindText: '总人数：10人',
        level:'',
        showChild: false,
      },
      {
        name: 'root2',
        bindText: '总人数：108人',
        level: '',
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
    ],
    btnText:'点我切换',
    clickFn: this.dismiss.bind(this)
  }

 

  ionViewDidLoad() { }

}
