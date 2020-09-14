import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    // PostsComponent
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
