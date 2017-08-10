import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {IProduct} from '../interfaces/products';
import {IProject} from '../interfaces/projects';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    path = '/';
    // path = 'http://localhost:3000/';
    emailURL = `${this.path}api/mailchimp`;
    postsUrl = `${this.path}api/blogposts`;
    instagramUrl = `${this.path}api/instagram`;
    // productURL = 'assets/api/products.json';
    // projectURL = 'assets/api/projects.json';
    productURL = `${this.path}api/books`;
    projectURL = `${this.path}api/projects`;
    products = new BehaviorSubject<IProduct[]>([]);
    projects = new BehaviorSubject<IProject[]>([]);
    productsAnnounced$ = this.products.asObservable();
    projectsAnnounced$ = this.projects.asObservable();
    subscribe = new BehaviorSubject('');
    subscribeAnnounced$ = this.subscribe.asObservable();

    constructor(private _http: Http) {
        this.getProducts();
        this.getProjects();
    }

    updateProducts(products: IProduct[]) {
        this.products.next(products);
    }

    updateProjects(value: IProject[]) {
        this.projects.next(value);
    }

    sendEmailResponse(response) {
        let res = response.statusCode === 200 ? 'Success! Thank you for subscribing' : response.body.detail;
        if (typeof res === 'string') {
            this.subscribe.next(res);
        }
    }

    getProducts() {
        this._http.get(this.productURL).subscribe((response: any) => {
            let res = response.json();
            this.updateProducts(res);
        });
    }

    getBlogPosts() {
        return this._http.get(this.postsUrl)
            .map(res => res.json())
            .catch((e: any): Observable<any> => {
                return this.handleError(e);
            });
    }

    getBlogPost(title) {
        return this._http.get(`${this.postsUrl}/${encodeURIComponent(title)}`)
            .map(res => res.json())
            .catch((e: any): Observable<any> => {
                return this.handleError(e);
            });
    }

    getProjects() {
        this._http.get(this.projectURL).subscribe((response: any) => {
            let res = response.json();
            this.updateProjects(res);
        });
    }

    getInstagramPost() {
        return this._http.get(this.instagramUrl)
            .map(res => {
                let result: any = res.json().data;

                console.log(result);
                return result;
            })
            .catch((e: any): Observable<any> => {
                return this.handleError(e);
            });
    }

    postEmail(obj) {
        let fullName = obj.name.split(' ');
        let newObj = {
            'email': obj.email,
            'fName': fullName[0],
            'lName': fullName[1]
        };
        this.sendPost(newObj).subscribe(
            data => this.sendEmailResponse(data),
            error => this.sendEmailResponse(error)
        );
    }

    sendPost(obj) {
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        let params = `fName=${obj.fName}&lName=${obj.lName}&email=${obj.email}`;

        return this._http.post(this.emailURL, params, {headers: headers})
            .map(res => res.json())
            .catch(res => res.json());
    }

    handleError (error: Response, msg?) {
        return Observable.throw(error);
    }
}
