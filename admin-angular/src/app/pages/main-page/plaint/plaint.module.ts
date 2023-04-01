import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaintComponent } from './plaint.component';
import { PlaintRoutingModule } from './plaint-routing.module';

@NgModule({
  declarations: [PlaintComponent],
  imports: [
    CommonModule,
    PlaintRoutingModule
  ]
})
export class PlaintModule { }
