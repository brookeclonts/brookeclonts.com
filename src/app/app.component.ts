import { Component, OnInit } from '@angular/core';
import {AnimationService} from './services/animation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    loader: boolean;
    fadeOut: boolean = true;
    route;
    showLoaderIcon: boolean;

    constructor(private animate: AnimationService) {
        animate.loaderAnnounced$.subscribe(
            (value: boolean) => {
            this.loader = value;
            if (this.loader === true ){
                this.showLoader();
            }
        });
    }

    moveLoader() {
        let banner = document.getElementById('homeTat');
        let loader = document.getElementById('loaderTat');
        let bannerOffset = banner.getBoundingClientRect().top;
        loader.setAttribute('style', `margin-top: ${bannerOffset}px; top: 0`);
    }

    showLoader() {
        this.fadeOut = false;
        setTimeout(() => {
            this.moveLoader();
            this.fadeOutLoader();
        }, 2500);
    }

    fadeOutLoader() {
        setTimeout(() => {
            this.fadeOut = true;
            setTimeout(() => {
                this.animate.updateLoader(false);
            }, 500);
        }, 500);
    }

    ngOnInit() {}
}
