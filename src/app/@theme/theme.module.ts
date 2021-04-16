import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTabComponent } from './components/header-tab/header-tab.component';
import { MenuTabComponent } from './components/menu-tab/menu-tab.component';
import { DesktopLayoutComponent, MobileLayoutComponent } from './layouts';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MenuTabActionsComponent } from './components/menu-tab-actions/menu-tab-actions.component';
import { NavListComponent } from './components/nav-list/nav-list.component';

const MODULES = [];
const COMPONENTS = [HeaderTabComponent, MenuTabComponent, MobileLayoutComponent, DesktopLayoutComponent, MenuTabActionsComponent, NavListComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, RouterModule],
  exports: [...COMPONENTS],
})
export class ThemeModule {}
