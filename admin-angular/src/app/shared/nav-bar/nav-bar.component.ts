import { Component, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/compiler/src/core';

import { EmpresasService } from 'src/app/services/empresas.service';
import { BranchsService } from 'src/app/services/branchs.service';

import { Icompanyxusers } from 'src/app/interface/icompanyxusers';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  companysList  : any = [];

  idCompany     : number = 0 ;

  emailc        : string = '' ;

  valorcapt     : string = '';

  constructor( private empresasService : EmpresasService, private branxchsService : BranchsService ) {
        // before render, no Async -- once time

      }

  ngOnInit(): void {
    /*=============================================
    Sacamos la consulta de empresas x correo
   =============================================*/
    this.emailc = this.empresasService.getEmail();

    this.empresasService.getEmpresasxEmail("email", this.emailc)
    .subscribe(
      (resp:any) =>{

        this.companysList = Object.keys(resp).map(

          a => ({

              namecompany: resp[a].namecompany,
              id_company  : resp[a].id_company

          })

        )

      //  console.log("this companys", this.companys);

      }
    )
  }


  branchChanges(e: any) {

   /*=============================================
    Get query of branch x company
   =============================================*/
   console.log(e.target.value);

   this.empresasService.getEmpresasxEmail("email", this.emailc)
   .subscribe(
     (resp:any) =>{

       this.companysList = Object.keys(resp).map(

         a => ({

             namecompany: resp[a].namecompany,
             id_company  : resp[a].id_company

         })

       )

     //  console.log("this companys", this.companys);

     }
   )


  }

}

