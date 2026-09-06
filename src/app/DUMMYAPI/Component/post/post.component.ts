import { Component, OnInit } from '@angular/core';
import { Post } from '../../Model/post.model';
import { PostService } from '../../Service/post.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  //Store All Post
  posts: Post[] = [];

  //Form Data
  post: Post = {
    title: '',
    body: '',
    userId: 1,
  };

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (error) => {
        console.error(error);
        Swal.fire('Error', 'Unable to load posts.', 'error');
      },
    });
  }

  getPostById(id: number): void {
    if (id == null) {
      Swal.fire('Id null', 'Id Cannot be null', 'info');
    }
    this.postService.getPostById(id).subscribe({
      next: (response) => {
        console.log('Post Data : - ', response);
        Swal.fire(response.title, response.body, 'info');
      },
    });
  }

  addPost(): void {
    this.postService.addPost(this.post).subscribe({
      next: (response) => {
        console.log('Created Post - ', response);
        Swal.fire('Success', 'Post added successfully!', 'success');
        this.posts.unshift(response);
        this.post = {
          title: '',
          body: '',
          userId: 1,
        };
      },
      error: (error) => {
        console.error(error);
        Swal.fire('Error', 'Unable to add post.', 'error');
      },
    });
  }
}
