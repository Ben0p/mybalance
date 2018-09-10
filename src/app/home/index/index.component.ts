import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../posts/post';
import { PostService } from '../../posts/post.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [
    './index.component.scss',
    './parallax.scss',
    './arrow.scss',
    './carousel.scss'
  ]
})

export class IndexComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(
    private postService: PostService
  ) { }

  navigate(url) {
    window.open(url, '_blank');
  }

  scrollTo(Id: string): void {
    const elementList = document.querySelectorAll('.' + Id);
    const element = elementList[0] as HTMLElement;
    console.log(elementList);
    element.scrollIntoView({ behavior: 'smooth' });
 }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
