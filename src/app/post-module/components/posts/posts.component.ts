import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(value => {
      this.posts = value.fetchPosts;
    });
  }

  ngOnInit(): void {
  }

}
