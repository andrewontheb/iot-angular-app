export class Device {
  id: number;
  name: string;
  status: string;
  type: string;
  position: LatLong;
}

class LatLong {
  lat: number;
  lng: number;
}
