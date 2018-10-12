import { Component, Input, ElementRef, NgZone } from '@angular/core';
@Component({
  selector: 'img-lazyLoad',
  template: `
  <img [src]="imgurl" alt="">
  `,
})
/* 组件使用说明
  功能：图片懒加载
  入参说明：src：字符串类型，图片真实地址，必填
           default：字符串类型，默认图片地址，非必填
  返回值：无
  用例： <img-lazyLoad [src]="'https://pagead2.googlesyndication.com/pagead/imgad?id=CICAgKCLv96oQBCIDhiuBzII7-P7VzaCpDg'"
                      [default]="assets/imgs/slide1.jpg"></img-lazyLoad>

        父组件HTML文件中的的ion-content标签需加ionScroll, 具体可参考ionic文档
        <ion-content (ionScroll)="contentScroll($event)"></ion-content>

        父组件ts文件固定调用此方法即可，需引入ViewChildren。
        @ViewChildren(imgLazyLoadComponent) private childCmps: any;
        contentScroll(event) {
          this.childCmps.forEach((child) => { 
            child.lazyRender(event);
          });
        }
*/
export class imgLazyLoadComponent {
  imgurl: string;
  offsetTop: number;
  @Input() src: string;
  @Input() default: string;
  constructor(private el:ElementRef, private zone: NgZone){}
  ngOnInit(){
    if (this.default == undefined) {
      this.default = "assets/imgs/default.jpg";
    }
    this.imgurl = this.default;
    this.offsetTop = this.el.nativeElement.querySelector('img').offsetTop;
    this.lazyRender({});
  }
  lazyRender(event) {
    if (this.checkShow(event) && !this.isLoaded()){
      this.loadImg();
    }
  }
  checkShow(event) {
    let scrollTop = event.scrollTop || 0;
    let windowHeight = event.contentHeight || document.documentElement.clientHeight;
    if (this.offsetTop < (scrollTop + windowHeight) && this.offsetTop > scrollTop) return true;
    return false;
  }
  isLoaded () {
    return this.imgurl === this.src;
  }
  loadImg () {
    this.zone.run(() => {
      let img = new Image();
      img.src = this.src;
      img.onload = () => {
        this.imgurl = this.src;
      }
    })
  }
}
