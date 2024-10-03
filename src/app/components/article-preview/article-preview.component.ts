import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() notifyLike: EventEmitter<string> = new EventEmitter<string>();
  isLiked: boolean = false;
  likeNotification: string = '';

  

  updateLikeNotification(): string {
    if (this.isLiked) {
      this.article.likes = this.article.likes + 1;
      return (this.likeNotification = `l'article "${this.article.title}" a été liké`);
    }
    this.article.likes = this.article.likes - 1;
    return (this.likeNotification = `un like de l'article "${this.article.title}" a été retiré
      `);
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.updateLikeNotification();
    this.notifyLike.emit(this.likeNotification);
  }
}
