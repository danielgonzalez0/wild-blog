import { Routes } from '@angular/router';

import { NotFoundComponent } from './pages/notFound/notFound.component';
import { ArticleComponent } from './components/article/article.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { authGuard } from './guards/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { roleGuard } from './guards/role.guard';
import { visitorOnlyGuard } from './guards/visitor-only.guard';
import { ProfilComponent } from './pages/profil/profil.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login',
    component: ConnexionComponent,
    canActivate: [visitorOnlyGuard],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [roleGuard('ROLE_ADMIN')],
  },
  { path: 'profile', component: ProfilComponent, canActivate: [authGuard] },
  { path: 'articles', component: HomePageComponent, canActivate: [authGuard] },

  { path: 'article/:id', component: ArticleComponent },
  { path: '**', component: NotFoundComponent },
];
