import { Component } from '@angular/core';

@Component({
  selector: 'ngx-desktop-layout',
  styleUrls: ['./desktop.layout.scss'],
  template: `
    <ion-app>
      <app-header-tab></app-header-tab>

      <ion-content>
        <ion-router-outlet></ion-router-outlet>
      </ion-content>

      <app-menu-tab></app-menu-tab>
    </ion-app>
  `,
})
export class DesktopLayoutComponent {}
