import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IMenu } from '../../models/menu.model';
import { NavListComponent } from '../nav-list/nav-list.component';

@Component({
  selector: 'app-menu-tab-actions',
  templateUrl: './menu-tab-actions.component.html',
  styleUrls: ['./menu-tab-actions.component.scss'],
})
export class MenuTabActionsComponent implements OnInit {
  public menus!: IMenu[];
  constructor(private menu: MenuController) {}

  ngOnInit(): void {
    this.menus = [
      {
        icon: 'list-circle-outline',
      },
      {
        icon: 'home',
        routerLink: '/home',
      },
      {
        icon: 'calendar',
        routerLink: '/admin',
      },
    ];
  }

  async openMenu(menu: IMenu): Promise<void> {
    if (!menu.routerLink) {
      this.menu.toggle('myList');
    }
  }
}
