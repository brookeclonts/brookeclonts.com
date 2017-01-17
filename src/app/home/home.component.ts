import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {IProduct} from '../interfaces/products';
import {AnimationService} from '../services/animation.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    books: IProduct[];

    constructor(private httpService: HttpService, private animate: AnimationService) {
        httpService.productsAnnounced$.subscribe(
            (value: IProduct[]) => {
            this.books = value;
        });
    }

    scrollToId(id) {
        this.animate.scrollAnimation(id);
    }

    ngOnInit() {
        this.animate.showLoaderIcon();
    }

}

