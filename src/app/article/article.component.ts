import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { articles } from '../data/articles';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Article } from '../../interface/Article';
import { NotFoundComponent } from '../notFound/notFound.component';

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

  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      console.log(this.articleId);

      if (this.articleId) {
        this.article = this.articles.find(
          (article) => article?.id === this.articleId
        ) as Article;
      }
    });
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
