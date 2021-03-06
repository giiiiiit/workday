import { Component, Input } from '@angular/core';
import { LoadingController } from 'ionic-angular';
declare var AMap:any;
/* 组件使用说明
  功能：地图轨迹
  入参说明： markers：数组类型，轨迹路线的标记点坐标，必填
            markers = [[123.481002,41.69384],[123.476281,41.697877],[123.466797,41.69682]];
  返回值：
  用例： <component-map [markers]="markers"></component-map>
        入口html引入  <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.8&key=80d600c091a327ffff0c0ab5b0661f9d"></script>
*/
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
  loading = this.loadingController.create({
    content: "地图正在努力加载",
  })
  @Input() markers: Array<number>;
  constructor(public loadingController: LoadingController) {
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
      strokeColor: "#ff4d56",
      strokeOpacity: 1,
      strokeWeight: 2,
      strokeStyle: "dashed",
      strokeDasharray: [5, 5]
    })
    this.map.add(this.polyline);
    this.polyline.hide();
  }
  private signPoint() {
    let _this = this;
    this.map.clearMap();
    let markersicon = new AMap.Icon({
        image: this.markerIcon,
    });
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
    this.loading.present();
    let geolocation;
    let _this = this;
    AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function() {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
        buttonOffset: new AMap.Pixel(10, 20),
        zoomToAccuracy: true,
        buttonPosition:'LB'
      });
      _this.map.addControl(geolocation);
      _this.map.addControl(new AMap.ToolBar());
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete);
      AMap.event.addListener(geolocation, 'error', onError);
      function onComplete (data) {
        _this.pathLine.push(new AMap.LngLat(data.position.lng, data.position.lat))
        _this.drawPolyline();
        _this.loading.dismiss();
      }
      function onError (data) {
        _this.drawPolyline();
        _this.loading.dismiss();
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
