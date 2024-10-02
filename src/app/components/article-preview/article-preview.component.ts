import { Component, Input } from '@angular/core';
import { Article } from '../../../interface/Article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.scss',
})
export class ArticlePreviewComponent {
  @Input() article!: Article;
}
