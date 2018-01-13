import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http.service';

@Injectable()
export class InstagramService {
    posts;
    instaposts = new BehaviorSubject<Array<String>>([]);
    instaAnnounced$ = this.instaposts.asObservable();

    constructor(private _http: HttpService) {
        this._http.getInstagramPost().subscribe((res) => {
            this.updatePosts(res);
        });
    }

    updatePosts(posts) {
        this.posts = posts;
        this.instaposts.next(posts);
    }

}
