import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { NewsRepository } from './NewsRepository';
import { PostModel } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends NewsRepository<PostModel, string> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
