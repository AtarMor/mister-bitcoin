import { Component, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {
  private contactService = inject(ContactService)

  contacts$!: Observable<Contact[]>

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
  }
}
