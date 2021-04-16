import { Component } from '@angular/core';

@Component({
  selector: 'ngx-mobile-layout',
  styleUrls: ['./mobile.layout.scss'],
  template: `
    <ion-app id="main-content">
      <ion-header>
        <app-header-tab></app-header-tab>
      </ion-header>
      <ion-content>
        <app-nav-list></app-nav-list>
        <ion-router-outlet></ion-router-outlet>
      </ion-content>

      <ion-footer>
        <app-menu-tab></app-menu-tab>
      </ion-footer>
    </ion-app>
  `,
})
export class MobileLayoutComponent {}
