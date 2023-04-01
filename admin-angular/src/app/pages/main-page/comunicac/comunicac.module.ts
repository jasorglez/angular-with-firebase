import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacComponent } from './comunicac.component';
import { ComunRoutingModule } from './comunicac-routing.module';

@NgModule({
  declarations: [ComunicacComponent],
  imports: [
    CommonModule,
    ComunRoutingModule
  ]
})
export class ComunicModule { }
