import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(value => {
      this.comments = value.fetchComments;
    });
  }

  ngOnInit(): void {
  }

}
