import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { NewsRepository } from './NewsRepository';
import { NewsModel } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends NewsRepository<NewsModel, string> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
