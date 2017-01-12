import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {IProduct} from '../interfaces/products';
import {AnimationService} from '../services/animation.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent {

    books: IProduct[];

    constructor(private httpService: HttpService, private animate: AnimationService) {
        httpService.productsAnnounced$.subscribe(
            (value: IProduct[]) => {
            this.books = value;
            console.log(this.books);
        });
    }

    scrollToId(id) {
        this.animate.scrollAnimation(id);
    }

}

