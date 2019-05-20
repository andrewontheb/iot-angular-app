import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() device: Device;
  detailsShown: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDetails(): void {
    this.detailsShown = !this.detailsShown;
  }

}
