import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const roleGuard: (expectedRole: string) => CanActivateFn =
  (expectedRole) => () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    console.log(authService.isLoggedIn());
    

    if (
      authService.isLoggedIn() &&
      authService.getUserRole() === expectedRole
    ) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  };
