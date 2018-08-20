import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '@myworkspace/core/services/newsService';

@Component({
  selector: 'app-newsDetail',
  templateUrl: 'news-detail.component.html'
})
export class NewsDetailComponent implements OnInit {
  news: any;
  constructor(
    private router: ActivatedRoute,
    private newsService: NewsService
  ) {
    console.log(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.newsService
      .findOne(this.router.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.news = data.articles;
        console.log('news Details', this.news);
      });
  }
}
