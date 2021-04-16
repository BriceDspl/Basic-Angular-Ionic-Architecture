import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-pages',
  template: `
    <ngx-desktop-layout *ngIf="!isMobile">
      <ion-router-outlet></ion-router-outlet>
    </ngx-desktop-layout>
    <ngx-mobile-layout *ngIf="isMobile">
      <ion-router-outlet></ion-router-outlet>
    </ngx-mobile-layout>
  `,
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  public isMobile!: boolean;
  constructor(private platform: Platform) {}

  ngOnInit(): void {
    this.isMobile = this.platform.is('mobile');
  }
}
