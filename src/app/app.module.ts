import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { PaginationComponent } from './pagination/pagination.component';

import { EventEmitterService } from './event-emitter.service';
import { DeviceComponent } from './device/device.component';
import { MapComponent } from './map/map.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    PaginationComponent,
    DeviceComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDEaoaan2JRTGEXA4tw0J8r-MNVmSuUUmw'
    }),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
