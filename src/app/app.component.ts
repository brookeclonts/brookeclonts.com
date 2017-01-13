import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    loader: boolean = true;
    fadeOut: boolean = false;

    constructor() {}

    moveLoader() {
        let banner = document.getElementById('homeTat');
        let loader = document.getElementById('loaderTat');
        let bannerOffset = banner.getBoundingClientRect().top;
        console.log(banner.getBoundingClientRect());
        console.log(bannerOffset);
        loader.setAttribute('style', `margin-top: ${bannerOffset}px; top: 0`);
    }

    showLoader() {
        setTimeout(() => {
            this.moveLoader();
            this.fadeOutLoader();
        }, 2500);
    }

    fadeOutLoader() {
        setTimeout(() => {
            this.fadeOut = true;
            setTimeout(() => {
                this.loader = false;
            }, 500);
        }, 500);
    }

    ngOnInit() {
        this.showLoader();
    }
}
