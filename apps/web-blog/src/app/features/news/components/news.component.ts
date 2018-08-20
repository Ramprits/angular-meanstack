import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { NewsService } from '@myworkspace/core/services/newsService';
import { NewsModule } from '../news.module';
import { NewsModel } from '@myworkspace/core/model/news.model';
import { Router } from '@angular/router';

@Component({
  selector: 'scope-news',
  templateUrl: 'news.component.html'
})
export class NewsComponent extends BaseComponent implements OnInit {
  news: any;
  isLoading = false;
  constructor(public newsService: NewsService, private router: Router) {
    super();
  }
  ngOnInit() {
    try {
      this.isLoading = true;
      setTimeout(() => {
        this.newsService.findAll().subscribe(data => {
          this.news = data.articles;
          this.isLoading = false;
        });
      }, 0);
    } catch (error) {
      console.log(error.message);
    }
  }

  getNewsDetail(newsData: string) {
    this.router.navigate(['/news', newsData]);
  }
}
