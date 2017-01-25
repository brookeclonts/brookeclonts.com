import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AnimationService } from './services/animation.service';
import {Router, NavigationEnd} from '@angular/router';
declare var ga: Function;

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
    currentRoute: string;

    constructor(private animate: AnimationService, private router: Router, private location: Location) {
        animate.loaderAnnounced$.subscribe(
            (value: boolean) => {
            if (value) {
                this.showLoader();
            } else {
                this.loader = value;
            }
        });

         router.events.subscribe((event) => {
            // Send GA tracking on NavigationEnd event. You may wish to add other
            // logic here too or change which event to work with
            if (event instanceof NavigationEnd) {
                // When the route is '/', location.path actually returns ''.
                let newRoute = this.location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (this.currentRoute !== newRoute) {
                    ga('send', 'pageview', newRoute);
                    this.currentRoute = newRoute;
                }
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
