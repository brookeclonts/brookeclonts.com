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
    emailURL= 'https://us14.api.mailchimp.com/3.0/lists/b762b0fa4f/members';
    productURL= 'assets/api/products.json';
    products = new BehaviorSubject<IProduct[]>([]);
    productsAnnounced$ = this.products.asObservable();
    subscribe = new BehaviorSubject('');
    subscribeAnnounced$ = this.subscribe.asObservable();

    mcUsername = 'brookeclonts';
    mcPassword = 'edb30ff6e207bb68b6c25fccca8e723b-us14';

    constructor(private _http: Http) {
        this.getProducts();
    }

    updateProducts(products: IProduct[]) {
        this.products.next(products);
    }

    sendEmailResponse(response) {
        console.log(response);
        // let res = typeof response === 'string' ? response : '';
        // this.subscribe.next(res);
    }

    getProducts() {
        this._http.get(this.productURL).subscribe((response) => {
            this.updateProducts(response.json());
        });
    }

    postEmail(obj) {
        let fullName = obj.name.split(' ');
        let newObj = {
            'email_address': obj.email,
            'status': 'subscribed',
            'merge_fields': {
                'FNAME': fullName[0],
                'LNAME': fullName[1]
            }
        };
        this.sendPost(newObj);
        // this.sendPost(newObj).subscribe(
        //     data => this.sendEmailResponse(data),
        //     error => this.sendEmailResponse(error)
        // );
    }

    sendPost(obj) {
        // let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
        // // headers.append('Authorization', 'Basic YnJvb2tlY2xvbnRzOmVkYjMwZmY2ZTIwN2JiNjhiNmMyNWZjY2NhOGU3MjNiLXVzMTQ=');
        // headers.append('Authorization', 'Basic ' + btoa('user:edb30ff6e207bb68b6c25fccca8e723b-us14'));
        // let options = new RequestOptions({ headers: headers });
        // // let params = `EMAIL=${obj.firstName}&FNAME=${obj.lastName}&LNAME=${obj.email}`;

        // return this._http.post(this.emailURL, obj, options)
        //     .map(res => res.json())
        //     .catch(err => err.json());
        let data = obj;
        let url = this.emailURL;
        let username: string = 'user';
        let password: string = 'edb30ff6e207bb68b6c25fccca8e723b-us14';
        let headers = new Headers();
        // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers.append('Authorization', 'Basic ' + btoa('user:edb30ff6e207bb68b6c25fccca8e723b-us14'));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this._http.post(url, data, {headers: headers}).subscribe(
            data => this.sendEmailResponse(data),
            error => this.sendEmailResponse(error)
        );
    }
}
