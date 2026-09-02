import { Injectable } from '@angular/core';
import { Post } from '../Model/post.model';
import { API_CONFIG } from '../APICONSTANT/api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly endpoint = `${API_CONFIG.BASE_URL}`;

  constructor(private http: HttpClient) {}

  //Get All Post
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.endpoint);
  }

  //Getting Single Post
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.endpoint}/${id}`);
  }

  //Add New Post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.endpoint, post);
  }
}
