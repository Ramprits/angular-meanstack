import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { NewsService } from '@myworkspace/core/services/newsService';
import { NewsModule } from '../news.module';
import { NewsModel } from '@myworkspace/core/model/news.model';

@Component({
  selector: 'scope-news',
  templateUrl: 'news.component.html'
})
export class NewsComponent extends BaseComponent implements OnInit {
  news: any;
  constructor(public newsService: NewsService) {
    super();
  }
  ngOnInit() {
    this.newsService.findAll().subscribe(data => {
      this.news = data.articles;
    });
  }
}
