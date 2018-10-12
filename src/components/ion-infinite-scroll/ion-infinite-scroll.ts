import { Component } from '@angular/core';
/* 组件使用说明
  功能：下拉刷新上啦加载
  入参说明： 无
  返回值：无
  用例： 为了列表样式多样化，此组件仅作为示例展示
*/
@Component({
  selector: 'ioninfinite-scroll',
  templateUrl: 'ion-infinite-scroll.html'
})
export class InfiniteScrollComponent {
  items = [];
  constructor() {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  doRefresh(refresher){
    console.log("下拉刷新");
    setTimeout(() => { 
        console.log('加载完成后，关闭刷新');
        this.items = []; 
        for (let i = 0; i < 30; i++) {
          this.items.push( this.items.length );
        }
        refresher.complete();
    }, 1500);
  }
  doInfinite(infiniteScroll) {
    console.log('上拉加载');
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
      console.log('加载完成后，关闭状态');
      infiniteScroll.complete();
    }, 1000);
  }
}
