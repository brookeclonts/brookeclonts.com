import { Component } from '@angular/core';
import {HttpService} from './services/http.service';
import {IProduct} from './interfaces/products';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    books: IProduct[];

    constructor(private httpService: HttpService) {
        httpService.productsAnnounced$.subscribe(
            (value: IProduct[]) => {
            this.books = value;
        });
    }
}
