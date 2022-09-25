import { HeatingZone } from "./heating-zone.interface";
import { Relay } from "./relay.interface";
import { Thermometer } from "./thermometer.interface";

export interface Status {
    status: number,
    current_desired_temperature: number,
    heating_zones: HeatingZone[],
    relays: Relay[],
    thermometers: Thermometer[]

}
