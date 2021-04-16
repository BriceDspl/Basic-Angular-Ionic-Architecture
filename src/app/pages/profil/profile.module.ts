import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHomeComponent } from './pages/profile-home/profile-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileHomeComponent, ProfileComponent],
  imports: [SharedModule, ProfilRoutingModule],
})
export class ProfileModule {}
