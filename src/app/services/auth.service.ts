import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private apiUrl = 'http://localhost:8080';
  private http = inject(HttpClient);

  // 1. Signal qui stocke le token
  private token = signal<string | null>(localStorage.getItem('token'));

  // 2. Signal computed pour savoir si l'utilisateur est connecté
  isLoggedIn = computed(() => {
    const value = this.token();
    if (!value) return false;

    try {
      const decoded: any = jwtDecode(value);
      const expiryDate = new Date(decoded.exp * 1000);
      return expiryDate > new Date();
    } catch {
      return false;
    }
  });

  // 3. Signal computed pour récupérer le rôle
  userRole = computed(() => {
    const value = this.token();
    if (!value) return null;

    try {
      const decoded: any = jwtDecode(value);
      return decoded.roles?.[0]?.authority || null;
    } catch {
      return null;
    }
  });

  // 4. Connexion : récupère le token du backend et le stocke
  login(email: string, password: string): Observable<string> {
    return this.http
      .post(
        `${this.apiUrl}/auth/login`,
        { email, password },
        { responseType: 'text' }
      )
      .pipe(tap((token) => this.saveToken(token)));
  }

  // 5. Stocke le token dans le signal ET localStorage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token.set(token);
  }

  // 6. Supprime le token
  clearToken(): void {
    localStorage.removeItem('token');
    this.token.set(null);
  }

  // 7. Pour l'interceptor
  getToken(): string | null {
    return this.token();
  }

  // 8. Appelable au démarrage de l'app (pour invalider un token expiré au reload)
  verifyToken(): void {
    const token = this.token();
    if (!token) return;

    try {
      const decoded: any = jwtDecode(token);
      const expiryDate = new Date(decoded.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
      }
    } catch {
      this.clearToken();
    }
  }
}
