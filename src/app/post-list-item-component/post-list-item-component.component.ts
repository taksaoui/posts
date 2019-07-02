import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.module';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() poste:Post;
  
  constructor(private postsservice:PostsService) { }

  ngOnInit() {
    
  }

  incrLoveIts(){
    this.postsservice.addLoveIts(this.poste);
    this.postsservice.updatePost(this.poste);
  }
  decrLoveIts(){
    this.postsservice.subLoveIts(this.poste);
    this.postsservice.updatePost(this.poste);
  }

  onDelete(){
    this.postsservice.removePost(this.poste);
  }
}
