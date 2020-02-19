import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from '../const/appsetting.const';

@Injectable({
    providedIn: 'root'
})
export class PostService {


    returnPost: Post[] = [];

    constructor(private http: HttpClient) {
    }

    getPosts(id?: string): Observable<any> {

        // lol xD
        id = (id === 'posts' ? '' : id);

        return id ? this.http.get(Api.API_MYSQL_GET_ONE_POST + id) : this.http.get(Api.API_MYSQL_GET_POSTS);
    }
}
