import { Component, Input } from '@angular/core';
declare var AMap:any;
declare var window:any;
@Component({
  selector: 'component-map',
  templateUrl: 'component-map.html'
})

export class ComponentMapComponent {
  markerIcon: string;
  buttonName: string;
  LineOpa: boolean;
  pathLine = [];
  map: any;
  polyline: any;
  @Input() markers: Array<number>;
  constructor() {
    this.markerIcon = '../../assets/imgs/mapPoint2.png';
    this.buttonName = '生成轨迹';
    this.LineOpa = true;
  }
  showLine() {
    if (!this.LineOpa) {
      this.polyline.hide();
      this.buttonName = '生成轨迹';
    } else {
      this.polyline.show();
      this.buttonName = '取消轨迹';
    }
    this.LineOpa = !this.LineOpa;
  }
  private drawPolyline() {
    this.polyline = new AMap.Polyline({
      path: this.pathLine, 
      strokeColor: "#ff4d56", //线颜色
      strokeOpacity: 1,       //线透明度
      strokeWeight: 2,        //线宽
      strokeStyle: "dashed",   //线样式
      strokeDasharray: [5, 5] //补充线样式
    })
    this.map.add(this.polyline);
    this.polyline.hide();
  }
  private signPoint() {
    let _this = this;
    this.map.clearMap();  // 清除地图覆盖物
    let markersicon = new AMap.Icon({
        image: this.markerIcon,  // Icon的图像
    });
    // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
    this.markers.forEach(function(marker) {
        new AMap.Marker({
            map: _this.map,
            icon: markersicon,
            position: [marker[0], marker[1]],
            offset: new AMap.Pixel(-8, -8)
        });
    });
  }
  public getGeolocation() {
    let geolocation;
    let _this = this;
    AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function() {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition:'LB'
      });
      _this.map.addControl(geolocation);
      _this.map.addControl(new AMap.ToolBar());
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
      AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
      function onComplete (data) {
        _this.pathLine.push(new AMap.LngLat(data.position.lng, data.position.lat))
        _this.drawPolyline();
      }
      function onError (data) {
        _this.drawPolyline();
      }
    })
  }
  ngOnInit() {
    this.map = new AMap.Map('container',{
      resizeEnable: true
    });
    for (let i=0; i<this.markers.length; i++) {
      this.pathLine.push(new AMap.LngLat(this.markers[i][0], this.markers[i][1]))
    }
    this.signPoint();
    this.getGeolocation();
  }
}
