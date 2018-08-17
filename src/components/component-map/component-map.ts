import { Component } from '@angular/core';
import { MapOptions, BMapInstance, Point, PolylineOptions } from 'angular2-baidu-map';
// declare var global
@Component({
  selector: 'component-map',
  templateUrl: 'component-map.html'
})
export class ComponentMapComponent {
  public options: MapOptions
  public bMapInstance: BMapInstance
  public points: Array<Point>
  public polylineOptions: PolylineOptions

  private myBeginIcon:any
  private myEndIcon:any
  private list:any []
  
  constructor() {
    this.options = {
      centerAndZoom: {
        lat: 39.910,
        lng: 116.399,
        zoom: 14
      },
      enableScrollWheelZoom: true
    }
    this.points = [
      {
        lat: 39.910,
        lng: 116.399
      }, {
        lat: 39.920,
        lng: 116.405
      }, {
        lat: 39.900,
        lng: 116.425
      }, {
        lat: 39.890,
        lng: 116.435
      }, {
        lat: 39.880,
        lng: 116.545
      }, {
        lat: 39.870,
        lng: 116.455
      }, {
        lat: 39.860,
        lng: 116.465
      }
    ]
    // this.icons = new window.BMap.IconSequence(this.symbol, '10', '30');

    // this.symbol = new window.BMap.Symbol('BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW', {
    //   scale: 0.6,//图标缩放大小
    //   strokeColor:'#fff',//设置矢量图标的线填充颜色
    //   strokeWeight: '2',//设置线宽
    // });
    this.polylineOptions = {
      strokeWeight: 4.5,//折线的宽度，以像素为单位
      strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
      strokeColor: "#18a45b" //折线颜色
    }
    // this.Symbol('BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW', {
    //   scale: 0.6,//图标缩放大小
    //   strokeColor:'#fff',//设置矢量图标的线填充颜色
    //   strokeWeight: '2',//设置线宽
    // })
  }
  public polylineLoaded(polyline): void {
    console.log('polyline loaded', polyline)
  }
}
