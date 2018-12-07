import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appstart',
  templateUrl: './appstart.component.html',
  styleUrls: ['./appstart.component.css']
})
export class AppstartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('App Start run');
  }

}
