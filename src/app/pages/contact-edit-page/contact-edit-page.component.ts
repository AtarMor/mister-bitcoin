import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrl: './contact-edit-page.component.scss'
})
export class ContactEditPageComponent implements OnInit{
  private contactService = inject(ContactService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  contact = this.contactService.getEmptyContact()

  ngOnInit(): void {
      this.route.data.pipe(
          map(data => data['contact']),
          filter(contact => contact),
      ).subscribe(contact => {
          this.contact = contact
      })
  }

  onSaveContact() {
    console.log('this.contact',this.contact)
      this.contactService.saveContact(this.contact as Contact)
          .subscribe({
              next: () => this.router.navigateByUrl('/contact'),
              error: err => console.log('err:', err)
          })
  }
}
