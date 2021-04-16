import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MiscRoutingModule } from './misc-routing.module';
import { MiscComponent } from './misc.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent, MiscComponent],
  imports: [SharedModule, MiscRoutingModule],
})
export class MiscModule {}
