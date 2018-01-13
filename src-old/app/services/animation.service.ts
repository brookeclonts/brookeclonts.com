import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AnimationService {
    loader = new BehaviorSubject<boolean>(false);
    loaderAnnounced$ = this.loader.asObservable();
    alreadyLoaded: boolean = false;

    constructor() { }

    updateLoader(value) {
        this.loader.next(value);
    }

    showLoaderIcon() {
        if (this.alreadyLoaded !== true) {
            this.updateLoader(true);
            this.scrollTop();
        }
        this.alreadyLoaded = true;
    }

    // flip animation
    flipTattoo() {
        return true;
    }

    // SCROLL
    currentYPosition() {
        if (self.pageYOffset) {
            return self.pageYOffset;
        }
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    }

    elmYPosition(eID) {
        let elm = document.getElementById(eID);
        let y = elm.offsetTop;
        let node: any = elm;
        while (node.offsetParent && node.offsetParent !== document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        } return y;
    }

    scrollAnimation(eID) {
        let startY = this.currentYPosition(),
        stopY = this.elmYPosition(eID),
        distance = stopY > startY ? stopY - startY : startY - stopY;

        if (distance < 100) {
            scrollTo(0, stopY); return;
        }

        //change speed here
        let speed = Math.round(distance / 100);
        // if (speed >= 20) { speed = 20; }
        if (speed >= 60) { speed = 60; }

        let step = Math.round(distance / 25);

        let leapY = stopY > startY ? startY + step : startY - step;
        let timer = 0;
        if (stopY > startY) {
            for ( let i = startY; i < stopY; i += step ) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step; if (leapY > stopY) { leapY = stopY; } timer++;
            } return;
        }
        for ( let i = startY; i > stopY; i -= step ) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step; if (leapY < stopY) {leapY = stopY; } timer++;
        }
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }
}
