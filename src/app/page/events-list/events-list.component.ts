import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor(private service: EventService) { }

  eventList = this.service.getAll()

  ngOnInit(): void {
  }

}
