// import { Injectable } from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation';

// @Injectable()
// export class GeolocationServer {

//   constructor(private geolocation: Geolocation) {
//   }

//   public GetGeolocation() {
//     console.log('进入服务');
    
//     return this.geolocation.getCurrentPosition().then((resp) => {
//       // resp.coords.latitude
//       // resp.coords.longitude
//       alert(111)
//       console.log(1111);
      
//       console.log(resp.coords.latitude);
      
      
//     }).catch((error) => {
//       alert(2222222)
//       console.log('获取失败');
      
//       console.log('Error getting location', error);
//     });
//   }

//   public GetGeolocationWatch(){
//     let watch = this.geolocation.watchPosition();
//     watch.subscribe((data) => {
//     // data can be a set of coordinates, or an error (if an error occurred).
//     // data.coords.latitude
//     // data.coords.longitude
    
//     // console.log(data.coords.latitude)
//     });
//   }

// }
