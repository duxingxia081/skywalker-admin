import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityListCreateComponent } from './activity-list/create/create.component';


const COMPONENTS = [
  ActivityListComponent,
];
const COMPONENTS_NOROUNT = [
  ActivityListCreateComponent
];

@NgModule({
  imports: [SharedModule, ActivityRoutingModule],
  declarations: [ ...COMPONENTS, ...COMPONENTS_NOROUNT ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ActivityModule {
}
