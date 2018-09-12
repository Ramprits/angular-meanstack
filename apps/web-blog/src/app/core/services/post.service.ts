import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostRepository } from '@myworkspace/core/services/PostRepository';

@Injectable({
  providedIn: 'root'
})
export class PostService extends PostRepository<any, string> {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }
}
