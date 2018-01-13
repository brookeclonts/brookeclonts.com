import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http.service';

@Injectable()
export class BlogPostsService {
    posts;
    blogposts = new BehaviorSubject<Array<String>>([]);
    blogpostsAnnounced$ = this.blogposts.asObservable();

    constructor(private _http: HttpService) {
        this._http.getBlogPosts().subscribe((res) => {
            this.updatePosts(res);
        });
    }

    updatePosts(posts) {
        this.posts = posts;
        this.blogposts.next(posts);
    }

    getPost(title) {
        return this._http.getBlogPost(title).map(res => res);
    }

}
