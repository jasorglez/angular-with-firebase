import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { AppRoutingModule } from '../app-routing.module';

//Modulos Personalizados
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './main-page/error404/error404.component';
import { PlaintComponent } from './main-page/plaint/plaint.component';
import { ComunicacComponent } from './main-page/comunicac/comunicac.component';
import { BranchsComponent } from './main-page/branchs/branchs.component';



@NgModule({
  declarations: [MainPageComponent, Error404Component],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
