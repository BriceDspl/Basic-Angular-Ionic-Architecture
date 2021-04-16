import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

const COMPONENTS = [];
const MODULES = [CommonModule, TranslateModule, IonicModule];

@NgModule({
  declarations: [],
  imports: [...MODULES, RouterModule],
  exports: [...MODULES],
})
export class SharedModule {}
