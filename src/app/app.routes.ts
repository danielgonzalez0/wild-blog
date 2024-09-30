import { Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path:"**", component: NotFoundComponent}
];
