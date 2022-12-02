import { GuestListComponent } from './guest-list/guest-list.component';
import { RspvComponent } from './rspv/rspv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "rspv"},
  {path: "rspv", component: RspvComponent},
  {path: "guestList", component: GuestListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
