import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { contactResolver } from './resolvers/contact.resolver';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'contact', component: ContactPageComponent, children: [
      { path: 'edit', component: ContactEditPageComponent },
      { path: 'edit/:id', component: ContactEditPageComponent, resolve: { contact: contactResolver } }
    ]
  },
  { path: 'contact/:id', component: ContactDetailsPageComponent, resolve: { contact: contactResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
