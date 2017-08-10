import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {IProduct} from '../interfaces/products';
import {AnimationService} from '../services/animation.service';
import { BlogPostsService } from '../services/blog-posts.service';
import { InstagramService } from '../services/instagram.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    books: IProduct[];
    post;
    instagramPosts;

    constructor(
        private httpService: HttpService,
        private animate: AnimationService,
        private _blog: BlogPostsService,
        private _insta: InstagramService
    ) {
        httpService.productsAnnounced$.subscribe(
            (value: IProduct[]) => {
            this.books = value;
        });

        this._blog.blogpostsAnnounced$.subscribe(res => this.post = res[0]);
        this._insta.instaAnnounced$.subscribe(res => this.instagramPosts = res);
    }

    scrollToId(id) {
        this.animate.scrollAnimation(id);
    }

    ngOnInit() {}

}

