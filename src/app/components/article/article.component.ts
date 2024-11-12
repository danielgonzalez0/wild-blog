import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { articles } from '../../data/articles';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Article } from '../../../interface/Article';
import { NotFoundComponent } from '../../pages/notFound/notFound.component';
import { ArticlesService } from '../../services/articles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  standalone: true,

  imports: [FormsModule, NotFoundComponent, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article!: Article;
  articleId!: number;

  articles: (Article | null | undefined)[] = articles;

  private route: ActivatedRoute = inject(ActivatedRoute);
  readonly ArticleService = inject(ArticlesService);
  private articleSubscription!: Subscription;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });

    this.articleSubscription = this.ArticleService.getArticleById(
      this.articleId
    ).subscribe((data) => {
      this.article = data;
    });
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
