import { Component, Input, ElementRef, ViewChild, AfterViewChecked, OnInit} from '@angular/core';



@Component({
  selector: 'img-lazyLoad',
  template: `
  <img src="{{default}}" alt="">
  `,
})

export class imgLazyLoadComponent {


  @Input() src: string; //要显示的图片

  @Input() default: string;
  constructor() {
  
  }


  ngOnInit () {  
   
    let img = new Image();
    img.src = this.src;
   


    img.onload = () => {
      this.default = this.src;

    }

  }



}
