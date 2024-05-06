import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { BitcoinService } from '../../services/bitcoin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private userService = inject(UserService)
  private bitcoinService = inject(BitcoinService)
  private router = inject(Router)

  user = this.userService.getLoggedInUser()
  rate = this.bitcoinService.rate$

  ngOnInit(): void {
    if (this.user) {this.bitcoinService.getRate(this.user.coins)
      .subscribe({
        error: err => console.log('err:', err)
      })}
  }

  onLogout() {
    this.userService.logout()
    this.router.navigateByUrl('/signup')
  }
}
