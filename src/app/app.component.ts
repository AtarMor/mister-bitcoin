import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from './services/contact.service';
import { take } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mister-bitcoin';
  private contactService = inject(ContactService)

  ngOnInit(): void {
    this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => console.log('err:', err)
      })
  }
}
