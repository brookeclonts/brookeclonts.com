import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IProduct} from '../interfaces/products';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    productURL= 'assets/api/products.json';
    products = new BehaviorSubject<IProduct[]>([]);
    productsAnnounced$ = this.products.asObservable();

    constructor(private _http: Http) {
        this.getProducts();
    }

    updateProducts(products: IProduct[]) {
        this.products.next(products);
    }

    getProducts() {
        this._http.get(this.productURL).subscribe((response) => {
            this.updateProducts(response.json());
        });
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
