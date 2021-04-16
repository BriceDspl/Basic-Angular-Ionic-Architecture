import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ThemeModule } from '../@theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [PagesRoutingModule, SharedModule, ThemeModule, IonicModule],
})
export class PagesModule {}
