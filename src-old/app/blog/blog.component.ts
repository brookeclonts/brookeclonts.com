import { Component, OnInit } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';
import { HttpService } from '../services/http.service';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
    posts;

    constructor( private _blog: BlogPostsService, private _http: HttpService, private meta: Meta ) {
        this._blog.blogpostsAnnounced$.subscribe(res => this.posts = res);
    }

    ngOnInit() {
        this.meta.addTag({ name: 'Brooke Clonts Author Blog', description: 'Brooke Clonts believes in learning mindlessly. She writes fantasy novels and loves to incorporate history into her complex storylines. Read samples of her writing, or learn about the history she weaves into her stories.' });        
    }
}
