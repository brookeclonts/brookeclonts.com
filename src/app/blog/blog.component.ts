import { Component } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';
import { HttpService } from '../services/http.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent {
    posts;

    constructor( private _blog: BlogPostsService, private _http: HttpService ) {
        this._blog.blogpostsAnnounced$.subscribe(res => this.posts = res);
    }
}
