import { Component, OnInit } from '@angular/core';
import { ToDo } from './model/to-do';
import { ToDoService } from '../service/to-do-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [ToDoService]
})
export class ToDoListComponent implements OnInit {
  _postsArray: Array<ToDo>;

  constructor(private toDoService: ToDoService) {
  }

  getPosts(): void {
    this.toDoService.getTodos()
      .subscribe(
        resultArray => this._postsArray = resultArray,
        error => console.log('Error :: ' + error));
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
