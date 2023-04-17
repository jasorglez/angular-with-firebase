import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-side-bar',
  template : '{{_idEmpresa}}',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],

})

export class SideBarComponent implements OnInit {

  _idEmpresa = '' ;

	constructor(private router: Router, private empresasService: EmpresasService) { }

	ngOnInit()  { }

    consultxCompanyId() {

        this.empresasService.getEmpresa("101").subscribe(( data:any) => {

        this._idEmpresa = data.idemp ;

      });
    }





  /*=============================================
	Función de salida del sistema
	=============================================*/
	logout(){

		localStorage.removeItem('token');
		localStorage.removeItem('refreshToken');
		this.router.navigateByUrl("/login");
	}
}
