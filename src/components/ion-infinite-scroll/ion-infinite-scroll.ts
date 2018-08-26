import { Component } from '@angular/core';
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
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }
}
