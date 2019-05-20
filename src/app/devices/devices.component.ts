import { Component, ElementRef, ViewChildren, OnInit } from '@angular/core';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import { EventEmitterService } from '../event-emitter.service';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: Device[];

  constructor(private deviceService: DeviceService,
    private eventEmitterService: EventEmitterService,
    private el: ElementRef) {

  }

  ngOnInit(): void {
    if (this.eventEmitterService.subsVar==undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeFirstComponentFunction.subscribe((page:number) => {
        this.getDevices(page);
      });
    }
    this.getDevices();
  }


  async getDevices(page: number = 1): Promise<void> {
    const devices = await this.deviceService.getDevices(page);
    devices.subscribe((d: any) => this.devices = d.data);
  }
};
