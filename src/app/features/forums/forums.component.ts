import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss'],
})
export class ForumsComponent implements OnInit {
  dummy: any[] = [
    {
      date: new Date(),
      category: 'Food',
      description: 'Random',
      amount: 250,
    },
    {
      date: new Date(),
      category: 'Taxi',
      description: 'Random',
      amount: 350,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
