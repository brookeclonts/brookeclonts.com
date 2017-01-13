import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
    menu = false;

    constructor() { }

    toggleMenu() {
        this.menu = !this.menu;
    }

    ngOnInit() {
    }

}
