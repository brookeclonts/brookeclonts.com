import { Component, OnInit } from '@angular/core';
import {HttpService} from'../services/http.service';

@Component({
  selector: 'app-email-submission',
  templateUrl: './email-submission.component.html',
  styleUrls: ['./email-submission.component.sass']
})
export class EmailSubmissionComponent implements OnInit {

  subscribe = {
      'email': '',
      'name': ''
  };

  constructor(private httpService: HttpService) { }

   submitEmail(obj) {
        this.httpService.postEmail(obj);
    }

  ngOnInit() {
  }

}
