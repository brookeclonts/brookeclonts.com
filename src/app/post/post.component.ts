import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {
    post;
    postId;
    sub: any;

    constructor( private _blog: BlogPostsService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            function getId (obj: any) {
                return obj.id;
            }
            this.getPostInfo(getId(params));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPostInfo(id) {
        if (id) {
            this._blog.getPost(id).subscribe(res => {
                this.post = res;
            });
        }
    }

}
