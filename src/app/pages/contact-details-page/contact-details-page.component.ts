import { Component, Input, Output, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent {
  @Input() contactId!: string
  // @Output() back = new EventEmitter()

  private contactService = inject(ContactService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)


  // contact: contact | null = null
  contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))
  ans!: string
}
