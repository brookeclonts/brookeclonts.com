import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {
    post;
    postId;
    sub: any;

    constructor( private _blog: BlogPostsService, private _route: ActivatedRoute, private meta: Meta) { }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            function getId (obj: any) {
                return obj.id;
            }
            this.getPostInfo(getId(params));
        });
        this.meta.addTag({ name: this.post.name, description: this.post.description, image: this.post.imageUrl });                
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
