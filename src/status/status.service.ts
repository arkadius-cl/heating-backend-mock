import { Injectable } from '@nestjs/common';
import { Status } from 'src/status.interface';
import { faker} from '@faker-js/faker';
import { HeatingZone } from 'src/heating-zone.interface';
import { Relay } from 'src/relay.interface';
import { Thermometer } from 'src/thermometer.interface';
@Injectable()
export class StatusService {

    private getRandomStatus(): number {
        return faker.datatype.number({min:0, max:1})
    }

    private getRandomTemperature(): number {
        return faker.datatype.number({min: 19.5, max:24, precision: 0.1});
    }

    private createHeatingZines(qty: number): HeatingZone[]{
        const zones = [];
        for(let i = 0; i <=qty; i++){
            const zone = {
                name: faker.lorem.word(7),
                temperature: this.getRandomTemperature(),
                state: this.getRandomStatus()
            } as HeatingZone;
            zones.push(zone);
        }
        return zones;
    }

    private createRelays(qty: number): Relay[] {
        const relays = [];
        for(let i = 0; i <= qty; i++){
            const relay = {
                name: faker.lorem.word(5) + '_relay',
                state: this.getRandomStatus()
            } as Relay
            relays.push(relay);
        }
        return relays;
    }

    private createThermometers(qty: number, heatingZones: HeatingZone[]): Thermometer[]{
        const thermometers = [];
        for(let i = 0; i < qty; i++){
            const thermometer = {
                heating_zone:heatingZones[faker.datatype.number({min:0, max:heatingZones.length-1})].name,
                name: faker.lorem.word(7),
                state: this.getRandomStatus(),
                temperature: this.getRandomTemperature()
            } as Thermometer;
            thermometers.push(thermometer);
        }
        return thermometers;
    }

    create(): Status{
        const status = {
            status: this.getRandomStatus(),
            current_desired_temperature: this.getRandomTemperature(),
            heating_zones: this.createHeatingZines(3),
            relays: this.createRelays(2),
        } as Status;
        status.thermometers = this.createThermometers(3, status.heating_zones);
        return status;
    }

}
