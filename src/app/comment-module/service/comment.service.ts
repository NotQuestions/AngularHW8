import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService  implements Resolve<Comment[]>{
  constructor(private httpClient: HttpClient) { }
  getAllComments(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.getAllComments();
  }
}
