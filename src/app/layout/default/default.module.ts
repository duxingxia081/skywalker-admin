import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from './default.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [DefaultComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class DefaultModule { }
