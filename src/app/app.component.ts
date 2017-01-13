import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    loader: boolean = false;

    constructor() {}

    showLoader() {
        this.loader = true;
        setTimeout(() => {
            this.loader = false;
        }, 5000);
    }

    ngOnInit() {
        this.showLoader();
    }
}
