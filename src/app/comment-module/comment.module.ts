import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import {RouterModule, Routes} from '@angular/router';
import {CommentService} from './service/comment.service';
import {HttpClientModule} from '@angular/common/http';
import {ExportPipeModule} from '../export-pipe/export-pipe.module';

const routes: Routes = [
  {path: '', component: CommentsComponent, resolve: {fetchComments: CommentService}}
];
@NgModule({
  declarations: [CommentsComponent, ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ExportPipeModule,
  ],

})
export class CommentModule { }
