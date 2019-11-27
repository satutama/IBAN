import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ToDo } from '../to-do-list/model/to-do';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class ToDoService {
    private _todosURL = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: Http) {
    }

    getTodos(): Observable<ToDo[]> {
        return this.http
            .get(this._todosURL)
            .pipe(
                map((response: Response) => {
                    const result = <ToDo[]>response.json().filter(({ userId }: any) => userId === 1);
                    for (let i = 0; i < result.length; i++) {
                        result[i].order = i;
                    }
                    return result;
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
