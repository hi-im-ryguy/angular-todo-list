import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css']
})


export class ServerComponent implements OnInit {
  id = Math.floor(Math.random() * 100);
  isOnline: boolean = false;

  constructor() {
    this.isOnline = Math.random() > 0.5 ? true : false;
  }


  getServerStatus() {
    return this.isOnline ? "online" : "offline";
  }

  ngOnInit() { }

  getColor() {
    return this.isOnline == true ? 'green' : 'red';
  }
}