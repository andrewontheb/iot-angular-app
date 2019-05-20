import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {
  private loginUrl: string = 'https://report.iotfactory.eu/login';
  private apiUrl: string = `https://report.iotfactory.eu/api/devices?limit=20&page=`;
  private posUrl: string = "https://report.iotfactory.eu/api/devices/positions";
  devices: Device[];

  constructor(private http: HttpClient) { }

  async getDevices(page = 2): Promise<Observable<Device[]>> {
    let token;
    if(localStorage.auth_token !== null) {
      token = localStorage.auth_token;
    } else {
      token = await this.logInSystem();
    }
    const headers = {
      Authorization: `Session ${token}`
    }
    // let foo = await this.getPositions();
    const response: any = await this.http.get<Device[]>(this.apiUrl+page,  {headers: headers}).toPromise();
    return of(response);
  }

  async getPositions(): Promise<void> {
    let token = localStorage.auth_token;
    const headers = {
      Authorization: `Session ${token}`
    }
    const response: any = await this.http.get<Device[]>(this.posUrl,  {headers: headers}).toPromise();
  }



  private async logInSystem(): Promise<string> {
    const params = {
      'email':'5cb928846a20aa000d23b686',
      'password': '4d5guqqs9t3godn46aet'
    }
    const response: any = await this.http.post(this.loginUrl, params).toPromise();
    localStorage.setItem('auth_token', response._id);
    return response._id;
  }

}
