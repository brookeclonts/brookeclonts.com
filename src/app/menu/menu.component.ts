import { Component, OnInit } from '@angular/core';
import {AnimationService} from '../services/animation.service';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
    menu = false;

    constructor(private animate: AnimationService) { }

    toggleMenu() {
        this.menu = !this.menu;
    }

    scrollToId(id) {
        this.animate.scrollAnimation(id);
    }

    ngOnInit() {
    }

}
