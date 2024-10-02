import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../../../interface/Article';
import { articles } from '../../data/articles';
import { ArticlePreviewComponent } from "../../components/article-preview/article-preview.component";

@Component({
  selector: 'app-homePage',
  standalone: true,
  imports: [CommonModule, HomePageComponent, FormsModule, RouterLink, ArticlePreviewComponent],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent {
  articles: (Article | null | undefined)[] = articles;

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
  }
}
