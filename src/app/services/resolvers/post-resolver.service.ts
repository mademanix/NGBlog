import { PostService } from './../post.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<any> {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.postService.getPosts(route.params.id);
  }

}
