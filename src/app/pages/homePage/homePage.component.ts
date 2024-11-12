import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../../../interface/Article';
import { articles } from '../../data/articles';
import { ArticlePreviewComponent } from '../../components/article-preview/article-preview.component';
import { ArticlesService } from '../../services/articles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homePage',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticlePreviewComponent],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent {
  notificationLike: string = '';
  articles!: (Article | null | undefined)[];
  readonly ArticleService = inject(ArticlesService);
  private articleSubscription!: Subscription;

  ngOnInit():void {
    this.articleSubscription = this.ArticleService.getArticles().subscribe(
      (data) => {
        this.articles = data;
      }
    );
  }

  ngOnDestroy():void {
    this.articleSubscription.unsubscribe();
  }

  handleNotifyLike(message: string) {
    this.notificationLike = message;
    alert(this.notificationLike);
  }
}
