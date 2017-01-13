import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IProduct} from '../interfaces/products';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Headers, RequestOptions} from '@angular/http';
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
        console.log(response);
        let res = typeof response === 'string' ? response : '';
        this.subscribe.next(res);
    }

    getProducts() {
        this._http.get(this.productURL).subscribe((response) => {
            this.updateProducts(response.json());
        });
    }

    postEmail(obj) {
        let fullName = obj.name.split(' ');
        let newObj = {
            'email': obj.email,
            'firstName': fullName[0],
            'lastName': fullName[1]

        };
        this.sendPost(newObj).subscribe(
            data => this.sendEmailResponse(data),
            error => this.sendEmailResponse('Error HTTP Post Service')
        );
    }

    sendPost(obj): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        let params = `EMAIL=${obj.firstName}&FNAME=${obj.lastName}&LNAME=${obj.email}`;

        return this._http.post(this.emailURL, params, {headers: headers})
            .map(res => res.json())
            .catch(err => err.json());
    }
}
