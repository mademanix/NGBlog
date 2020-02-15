import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService {


    returnPost: Post[] = [];

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

    getPosts(id?: string): Observable<Post[]> {

        // lol xD
        id = (id === 'posts' ? '' : id);

        const array = [
            {
                title: 'Testowy tytuł',
                subtitle: 'czyli coś dla mnie xD',
                hashtags: ['one', 'two', 'three'],
                date: '2020-02-02',
                author: 'ludwikmeister',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscsdsdsing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam <strong>xD</strong>, ullamco laboris nisi ut aliquip ex ea commodo consequat. <!-- read more -->
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                slug: 'testowy-tytul'
            },
            {
                title: 'Testowy tytuł',
                subtitle: 'czyli coś dla mnie xD',
                hashtags: ['one', 'two', 'three'],
                date: '2020-02-01',
                author: 'ludwikmeister',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscsdsdsing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                slug: 'testowy-tytul2'
            },
            {
                title: 'Testowy tytuł',
                subtitle: 'czyli coś dla mnie xD',
                hashtags: ['one', 'two', 'three'],
                date: '2020-02-03',
                author: 'ludwikmeister',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscsdsdsing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                slug: 'testowy-tytul3'
            },
        ];

        this.returnPost = this.setReturnedPosts(id, array);
        return of(this.returnPost);
    }

    private setReturnedPosts(id: string, postsObject: any[]) {

        return id ? postsObject.filter(obj => obj.slug === id) : postsObject;
    }
    // getPost(id: number) {

        // return this.http
        //         .get<Post>('http://localhost:4200/${id}');
    // }
}
