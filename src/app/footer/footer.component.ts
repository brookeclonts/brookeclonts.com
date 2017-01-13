import { Component, OnInit } from '@angular/core';
import {HttpService} from'../services/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

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
