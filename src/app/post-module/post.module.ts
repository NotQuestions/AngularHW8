import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PostService} from './service/post.service';
import {ExportPipeModule} from '../export-pipe/export-pipe.module';

const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {fetchPosts: PostService}}
];

@NgModule({
  declarations: [PostsComponent, ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ExportPipeModule,
  ],

})
export class PostModule { }
