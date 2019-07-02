import { Injectable } from '@angular/core';
import { Post } from '../models/post.module';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts :Post[]=[];
  postsSubject = new Subject<Post[]>();

  constructor( private afDatabase: AngularFireDatabase,
                private toastr:ToastrService) { }

  emitPost(){
    this.postsSubject.next(this.posts);
  }

  savePost(data:string,title:string,del:boolean){
    return new Promise(
      (resolve, reject) =>{
        this.afDatabase.database.ref('/posts').set(this.posts).then(
          ()=>{
            if (del) {
              this.toastr.warning(data, title , { timeOut:3000});
            }else{
              this.toastr.success(data,title,{timeOut:3000});
            }
            resolve();
          },(error)=>{
            reject(this.toastr.error(error,'Erreur de sauvegarde!!!'));
          }
        );
      }
    );
  }

  getPosts(){
    this.afDatabase.database.ref('/posts').on('value', (result)=>{
      this.posts = result.val() ? result.val() : [];
      this.emitPost();
    })
  }

  createNewPost(nPost:Post){
    this.posts.push(nPost);
    this.savePost('Enregistrement terminé avec suuccés !','Nouveau post',false);
    this.emitPost();
  }

  removePost(post:Post){
    const postIndex = this.posts.findIndex(
      (postID) =>{
        if( postID === post ){
          return true;
        }
      }
    );
  
     this.posts.splice(postIndex,1);
     this.savePost('Le post intitulé "'+post.title.toUpperCase()+'" a  été supprimé avec succés','Suppression',true);
     this.emitPost();
  }

  addLoveIts(post:Post){
    post.loveIts +=1;
  }

  subLoveIts(post:Post){
    post.loveIts -=1;
  }

  updatePost(post:Post){
    const postIndex = this.posts.findIndex(
      (postID) =>{
        if( postID === post ){
          return true;
        }
      }
    );
     
    this.afDatabase.database.ref('/posts/'+postIndex).update(
      {
        loveIts :post.loveIts
      }
    );
    this.emitPost();
  }

}
