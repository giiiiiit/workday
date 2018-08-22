import { Component, Input, ElementRef, ViewChild} from '@angular/core';



@Component({
  selector: 'img-lazyLoad',
  template: `
  <img #imgLoad src="{{default}}" alt="" >
  `,
})

export class imgLazyLoadComponent {

  @ViewChild('imgLoad') ShowingImg: ElementRef;
  @Input() src: string; //要显示的图片
  @Input() width: string;
  @Input() height: string;
  @Input() default: string;
  constructor() {
   
  }


  ngOnInit () {  
 
    let img = new Image();
    img.src = this.src;
    this.ShowingImg.nativeElement.style.width = this.width;
    this.ShowingImg.nativeElement.style.height = this.height;
    img.onload = () => {
      this.default = this.src;
    }
  }


}
