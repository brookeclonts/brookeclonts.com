import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IProduct} from '../interfaces/products';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    emailURL= '//brookeclonts.us14.list-manage.com/subscribe/post?u=b56f526ae5a8b450ae52bfac1&amp;id=b762b0fa4f';
    productURL= 'assets/api/products.json';
    products = new BehaviorSubject<IProduct[]>([]);
    productsAnnounced$ = this.products.asObservable();
    subscribe = new BehaviorSubject('');
    subscribeAnnounced$ = this.subscribe.asObservable();

    constructor(private _http: Http) {
        this.getProducts();
    }

    updateProducts(products: IProduct[]) {
        this.products.next(products);
    }

    sendEmailResponse(response) {
        this.subscribe.next(response);
    }

    getProducts() {
        this._http.get(this.productURL).subscribe((response) => {
            this.updateProducts(response.json());
        });
    }

    postEmail(obj) {
        let fullName = obj.name.split(' ');
        let newObj = {
            'EMAIL': obj.email,
            'FNAME': fullName[0],
            'LNAME': fullName[1]

        };
        this._http.post(this.emailURL, newObj).subscribe((response) => {
            console.log(response);
            // this.sendEmailResponse(response.json());
        });
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
