import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ComunicacComponent } from './comunicac.component';

const routes: Routes = [
	{ path: '', component: ComunicacComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunRoutingModule { }
