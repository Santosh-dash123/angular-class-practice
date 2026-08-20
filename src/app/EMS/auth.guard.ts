import { inject, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const authservice = inject(AuthService);
  const router = inject(Router);

  if (authservice.isLoggedIn) {
    return true;
  }

  router.navigate(['']); //If IsLoggedIn is false then it will be automatically redirect to login page.

  return false;
};
