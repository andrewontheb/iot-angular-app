import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  latitude: number =  50.8409408;
  longitude: number = 4.0874613;

  selectedMarker:object = {};
  markers = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.setMarkers();
  }


  async setMarkers(): Promise<void> {
    const res = await this.deviceService.getDevices();
    res.subscribe((d: any) => {
      for (let marker of d.data) {
        // console.log(marker);
        for (var variable in marker) {
          if (marker.hasOwnProperty(variable)) {
            if(variable == 'staticPosition' && marker[variable].lat !== undefined) {
                // console.log(marker[variable].lat);
                this.markers.push({lat:marker[variable].lat, lng:marker[variable].lng, alpha: 1 , name:marker['name'] });
            }
          }
        }
      }
    });
  }


  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
      };
    }
}
