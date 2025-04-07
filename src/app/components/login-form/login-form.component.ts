import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

type User = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  user: User = {
    email: '',
    password: '',
  };

  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: () => this.router.navigate(['/profile']), // ou autre redirection
        error: () => alert('Email ou mot de passe incorrect'),
      });
    }
  }
}
