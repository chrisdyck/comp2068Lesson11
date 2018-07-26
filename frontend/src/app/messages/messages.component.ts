import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: object;

  constructor(private webService: WebService) { }

  async ngOnInit() {
    let response = await this.webService.getMessages();
    this.messages = response;
  }

}
