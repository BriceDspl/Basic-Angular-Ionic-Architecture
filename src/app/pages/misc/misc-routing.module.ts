import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiscComponent } from './misc.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/miscellaneous/404', pathMatch: 'full' },
  {
    path: '',
    component: MiscComponent,
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscRoutingModule {}
