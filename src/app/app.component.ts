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
    move: boolean = false;

    constructor(private animate: AnimationService) {
        animate.loaderAnnounced$.subscribe(
            (value: boolean) => {
            if (value) {
                this.showLoader();
            } else {
                this.loader = value;
            }
        });
    }

    moveLoader() {
        let banner = document.getElementById('homeTat');
        let loader = document.getElementById('loaderTat');
        if (banner && loader) {
            this.move = true;
            let bannerOffset = banner.getBoundingClientRect().top;
            loader.setAttribute('style', `margin-top: ${bannerOffset}px; top: 0`);
        }
    }

    showLoader() {
        this.loader = true;
        this.fadeOut = false;
        setTimeout(() => {
            this.moveLoader();
            this.fadeOutLoader();
        }, 2250);
    }

    fadeOutLoader() {
        this.fadeOut = true;
        setTimeout(() => {
            this.animate.updateLoader(false);
        }, 500);
    }

    ngOnInit() {
        this.animate.showLoaderIcon();
    }
}
