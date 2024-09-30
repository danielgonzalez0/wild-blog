import { Component } from '@angular/core';
import { Article } from '../../interface/Article';
import { articles } from '../data/articles';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homePage',
  standalone: true,
  imports: [CommonModule, HomePageComponent, FormsModule, RouterLink],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent {
  articles: (Article | null | undefined)[] = articles;

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
  }
}
