import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoggedIn = computed(() => this.authService.isLoggedIn());
  userRole = computed(() => this.authService.userRole());

  dropdownOpen = signal(false);
  console: any;

  toggleDropdown(): void {
    this.dropdownOpen.update((open) => !open);
  }

  closeDropdown(): void {
    this.dropdownOpen.set(false);
  }

  logout(): void {
    this.authService.clearToken();
    this.closeDropdown();
    this.router.navigate(['/login']);
  }
}
