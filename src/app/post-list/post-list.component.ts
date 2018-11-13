import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input()  post: Post;

  constructor() { }

  ngOnInit() {
  }

  incLoveIts(){
    this.post.loveIts++;
  }

  decLoveIts(){
    this.post.loveIts--;
  }

}
