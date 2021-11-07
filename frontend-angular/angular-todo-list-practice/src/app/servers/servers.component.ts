import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "";
  newServerName: string = "";
  servers = [
    'Server A',
    'Server B',
  ];
  displayDetails = false;
  displayDetailsLogId = 1;
  displayDetailsLog: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onCreateNewServer() {
    this.serverCreationStatus = `${this.newServerName} Server was created!`;
    this.servers.push(this.newServerName);
    this.newServerName = "";
  }
  
  onUpdateNewServerName(event: any) {
    this.newServerName = event.target.value;
  }

  toggleDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.logDisplayDetails();
  }

  logDisplayDetails() {
    this.displayDetailsLog.push({ "id": this.displayDetailsLogId, "timeStamp": new Date() });
    this.displayDetailsLogId++;
    console.log(this.displayDetailsLog);
  }
}
