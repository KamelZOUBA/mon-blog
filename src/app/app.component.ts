import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts:Array<Post> = [
   new Post('post 1', 'mon premier post'),
   new Post('post 2', 'mon deuxième post'),
   new Post('post 3', 'mon troisième post')
  ];
}
