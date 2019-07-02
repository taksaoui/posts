import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.module';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
  posts:Post[];
  postSubscription:Subscription;

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (postes:Post[])=>{
        this.posts = postes;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPost();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
