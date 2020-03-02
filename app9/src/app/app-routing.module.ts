import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: WelcomeComponent,
    data: {
      title: 'Welcome To Master Task'
    }
  },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  appRoutes = routes;

  getRoutes() {
    return this.appRoutes;
  }
}
