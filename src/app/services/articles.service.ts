import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../interface/Article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly http = inject(HttpClient);
  private readonly ARTICLES_URL_API = 'http://localhost:8080/articles';

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.ARTICLES_URL_API);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.ARTICLES_URL_API}/${id}`);
  }
}
