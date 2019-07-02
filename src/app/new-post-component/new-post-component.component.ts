import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css']
})
export class NewPostComponentComponent implements OnInit {
  postForm:FormGroup;
  
  constructor( private formbuilder:FormBuilder,
                private postservice:PostsService,
                private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formbuilder.group({
      title : ['', Validators.required],
      content: ['', Validators.required],
      loveIts:0,
      created_at : new Date().toString()
    });
  }

  onSavePost(){
    const titre = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts =this.postForm.get('loveIts').value;
    const dateCreated = this.postForm.get('created_at').value;
    
    const newPost = new Post(titre,content,loveIts,dateCreated);

    this.postservice.createNewPost(newPost);
    
    this.router.navigate(['/posts']);
  }

}
