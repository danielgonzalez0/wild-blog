import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../interface/Article';
import { ArticlePreviewComponent } from '../../components/article-preview/article-preview.component';
import { ArticlesService } from '../../services/articles.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from "../../components/login-form/login-form.component";

@Component({
  selector: 'app-homePage',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticlePreviewComponent, LoginFormComponent],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent implements OnInit, OnDestroy {
  notificationLike: string = '';
  articles!: (Article | null | undefined)[];
  readonly ArticleService = inject(ArticlesService);
  private articleSubscription!: Subscription;
    private authService = inject(AuthService);

  isLoggedIn = computed(() => this.authService.isLoggedIn());

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
