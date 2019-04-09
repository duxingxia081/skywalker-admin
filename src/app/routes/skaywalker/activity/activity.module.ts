import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { ActivityRoutingModule } from './activity-routing.module';


const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ActivityRoutingModule],
  declarations: [ ...COMPONENTS_NOROUNT ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ActivityModule {}
