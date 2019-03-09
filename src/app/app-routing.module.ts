import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {configInc} from './@core';

const routes: Routes = [
  {path: '', redirectTo: configInc.router.defaultRoute, pathMatch: 'full'},
  {path: '**', redirectTo: configInc.router.defaultRoute}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
