import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private userService = inject(UserService)
  private bitcoinService = inject(BitcoinService)

  user: User = this.userService.getUser()
  rate = this.bitcoinService.rate$

  ngOnInit(): void {
    this.bitcoinService.getRate(this.user.coins)
      .subscribe({
        error: err => console.log('err:', err)
      })
  }
}
