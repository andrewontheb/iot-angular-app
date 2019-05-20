import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { EventEmitterService } from '../event-emitter.service';
const PAGES_TO_SHOW = 5;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pageToGo: number = 1;
  pages = [];
  pagesToShow = [];

  constructor(private deviceService: DeviceService,
  private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    // this.getDevices();
  }

  async getDevices(): Promise<void> {
    const pages = await this.deviceService.getDevices();
    pages.subscribe((res:any) => {this.pages.length = res.pages;this.pagesToShow.length = res.pages < PAGES_TO_SHOW ? res.pages : PAGES_TO_SHOW;});

  }

  getPageOfDevices(page): void {
    this.pageToGo = page;
    this.eventEmitterService.firstComponentMethod(page);
  }


}
