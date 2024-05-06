import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  username = ''
  private userService = inject(UserService)
  private router = inject(Router)

  onSignUp() { 
    this.userService.setLoggedInUser(this.username)
    this.router.navigateByUrl('/home')
  }
}
