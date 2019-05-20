import { Device } from './device';

export const DEVICES: Device[] = [
  { id: 11, name: 'Tempreture Moscow Device123',position: {'lat':0.2222, 'lng': 0.222}, status: 'UP', type: 'Temperature Meter' },
  { id: 12, name: 'GPS Antenna Device',position: {'lat':0.333, 'lng': 0.333}, status: 'UP', type: 'Humidity Meter' },
  { id: 13, name: 'Weather Humidity Device',position: {'lat':0.44, 'lng': 0.44}, status: 'DOWN', type: 'Storm Meter' },
  { id: 14, name: 'KHP Meter Device',position: {'lat':0.55, 'lng': 0.55}, status: 'DOWN', type: 'Temperature Meter' }
];
