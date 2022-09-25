import { HeatingZone } from "./heating-zone.interface";

export interface Thermometer {
    name: string,
    state: number,
    temperature: number,
    heating_zone: string
}
