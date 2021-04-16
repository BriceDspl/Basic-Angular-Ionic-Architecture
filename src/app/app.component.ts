import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<ion-router-outlet></ion-router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'MyManganimeList';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use(localStorage.getItem('language') || 'en');
  }
}
