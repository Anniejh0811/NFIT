import { Injectable } from '@angular/core';
import { Comment } from '../_models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Comment[] = [{
    stars: 5,
    name: 'Shannon',
    content: '"I have muscles in places I never before. &FIT has helped me to activate my glutes and get that perky butt lift."',
}
  , {
    stars: 5,
    name: 'Angela',
    content: '"I live and swear by &Fit"',
},
{
  stars: 5,
  name: 'Kate',
  content: '"I live and swear by &Fit. I have muscles in places I never before"',
}];

  constructor() { }

  GetComments(){
    return this.comments;
  }
}
