import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faS, faStar } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../_models/comment';
import { CommentsService } from '../_services/comments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  faCoffee = faStar;

  comments = {} as Comment[];
  constructor(private CommentsService: CommentsService){

  }

  

  ngOnInit(): void {
    this.comments = this.CommentsService.GetComments();
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
    return Array(0);
  }


}
