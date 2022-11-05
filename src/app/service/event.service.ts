import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll():Event[]{
    return [new Event('McLaren', '2012.03.03.', '19:00', new Location('Main Street 1', 'Woking', 'England')),
    new Event('Ferrari', '2002.02.11.', '20:00', new Location('Main Road 10', 'Woking', 'England')),
    new Event('Williams', '2012.01.01.', '10:00', new Location('Main Street 1', 'Dublin', 'Ireland'))
  ]
  }
}

