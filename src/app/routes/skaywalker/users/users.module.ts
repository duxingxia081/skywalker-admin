import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';


const COMPONENTS = [
  UserListComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class UsersModule {
}
