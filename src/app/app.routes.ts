import { Routes } from '@angular/router';

import { NotFoundComponent } from './pages/notFound/notFound.component';
import { ArticleComponent } from './components/article/article.component';
import { HomePageComponent } from './pages/homePage/homePage.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '**', component: NotFoundComponent },
];
