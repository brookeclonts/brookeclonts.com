import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {
    message: string = '';
    show = false;

    constructor(private httpService: HttpService) {
        httpService.subscribeAnnounced$.subscribe(
            (value: string) => {
                console.log(value);
            this.message = value;
            if (this.message) {
                this.showMessage();
            }
        });
    }

    showMessage() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 3000);
    }

    close() {
        this.show = false;
    }

    ngOnInit() {
    }

}
