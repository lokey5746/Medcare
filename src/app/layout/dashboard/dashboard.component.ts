import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private calendar: NgbCalendar) {
  }
  model: NgbDateStruct;
  date: {year: number, month: number};
  ngOnInit() {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
