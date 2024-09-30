import { Component } from '@angular/core';
import { Article } from '../../interface/Article';
import { articles } from '../data/articles';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HomePageComponent, FormsModule],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent {
  articles: (Article | null | undefined)[] = articles;

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
  }
}
