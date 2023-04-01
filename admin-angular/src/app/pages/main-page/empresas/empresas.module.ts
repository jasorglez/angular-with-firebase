import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ruta
import { EmpresasRoutingModule } from './empresas-routing.module';

//componente
import { EmpresasComponent } from './empresas.component';

//Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//pipes
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [EmpresasComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    PipesModule
  ]
})
export class EmpresasModule { }
