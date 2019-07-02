import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'posts',component: PostListComponentComponent},
  { path: 'new',component: NewPostComponentComponent},
  { path: '', redirectTo: 'posts', pathMatch:'full'},
  { path: '**' ,redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  PostListComponentComponent,
  PostListItemComponentComponent,
  NewPostComponentComponent,
  HeaderComponent
]
