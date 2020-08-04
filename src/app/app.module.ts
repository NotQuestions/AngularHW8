import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'users', loadChildren: () => import('./user-module/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./post-module/post.module').then(m => m.PostModule)},
  {path: 'comments', loadChildren: () => import('./comment-module/comment.module').then(m => m.CommentModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
