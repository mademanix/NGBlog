import {Injectable} from '@angular/core';
import {Post} from '../interfaces/post';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) {
    }

    // title: string;
    // subtitle: string;
    // date: string;
    // author: string;
    // text: string;
    // slug: string;

    // getPosts(): Observable<Post[]> {
    //
    //     return this.http
    //         .get<Post[]>('http://localhost:4200');
    // }

    getPosts(): Observable<Post[]> {

        return of([
                {
                    title: 'aaa',
                    subtitle: 'bbb',
                    date: 'ccc',
                    author: 'ddd',
                    text: 'bbbdddcccaaa',
                    slug: '123'
                },
                {
                    title: 'aaa',
                    subtitle: 'bbb',
                    date: 'ccc',
                    author: 'ddd',
                    text: 'bbbdddcccaaa',
                    slug: '123'
                },
                {
                    title: 'aaa',
                    subtitle: 'bbb',
                    date: 'ccc',
                    author: 'ddd',
                    text: 'bbbdddcccaaa',
                    slug: '123'
                },
            ]
        );
    }

    // getPost(id: number) {

        // return this.http
        //         .get<Post>('http://localhost:4200/${id}');
    // }

    getPost(id: number) {

        return of([
                {
                    title: 'aaa',
                    subtitle: 'bbb',
                    date: 'ccc',
                    author: 'ddd',
                    text: 'bbbdddcccaaa',
                    slug: '123'
                },
            ]
        )[id];
    }
}
