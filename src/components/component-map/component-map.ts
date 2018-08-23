import { Component, Input } from '@angular/core';
declare var AMap:any;
declare var window:any;
@Component({
  selector: 'component-map',
  templateUrl: 'component-map.html'
})

export class ComponentMapComponent {
  markerIcon: string;
  @Input() markers: Array<number>;
  constructor() {
    this.markerIcon = '../../assets/imgs/mapPoint2.png';
  }
  
  ngOnInit() {
    let pathLine = [];
    let polyline;
    for (let i=0; i<this.markers.length; i++) {
      pathLine.push(new AMap.LngLat(this.markers[i][0], this.markers[i][1]))
    }
    let geolocation;
    let map = new AMap.Map('container',{
      resizeEnable: true
    });
    AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function() {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition:'LB'
      });
      map.addControl(geolocation);
      map.addControl(new AMap.ToolBar());
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
      AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
      function onComplete (data) {
        pathLine.push(new AMap.LngLat(data.position.lng, data.position.lat))
        drawPolyline()
      }
      function onError (data) {
        drawPolyline()
      }
    })
    function drawPolyline () {
      polyline = new AMap.Polyline({
        path: pathLine, 
        strokeColor: "#ff4d56", //线颜色
        strokeOpacity: 1,       //线透明度
        strokeWeight: 2,        //线宽
        strokeStyle: "dashed",   //线样式
        strokeDasharray: [5, 5] //补充线样式
      });
      map.add(polyline);
    }
    map.clearMap();  // 清除地图覆盖物
    let markersicon = new AMap.Icon({
        image: this.markerIcon,  // Icon的图像
    });
    // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
    this.markers.forEach(function(marker) {
        new AMap.Marker({
            map: map,
            icon: markersicon,
            position: [marker[0], marker[1]],
            offset: new AMap.Pixel(-8, -8)
        });
    });
    window.init = function(){
      var driving = new AMap.Driving({
          map: map,
          panel: "panel"
      }); 
      // 根据起终点名称规划驾车导航路线
      driving.search([
          {keyword: '北京市地震局(公交站)',city:'北京'},
          {keyword: '亦庄文化园(地铁站)',city:'北京'}
      ]);
    }
  
  }
}
