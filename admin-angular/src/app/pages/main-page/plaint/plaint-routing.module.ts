import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { PlaintComponent } from './plaint.component';

const routes: Routes = [
	{ path: '', component: PlaintComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaintRoutingModule { }
