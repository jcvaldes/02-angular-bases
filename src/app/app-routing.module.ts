import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    // loadChildren: './pages/posts/posts.module#PostsModule'
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  // un solo forRoot en toda la aplicacion
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
