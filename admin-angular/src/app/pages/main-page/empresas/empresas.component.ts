import { Component, OnInit, ViewChild } from '@angular/core';
import { Iempresa } from 'src/app/interface/iempresa';
import { EmpresasService } from 'src/app/services/empresas.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger} from '@angular/animations'
import { environment } from 'src/environments/environment';
import { functions } from 'src/app/helpers/functions';



@Component({
    selector: 'app-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.css'],
    animations: [
      trigger('detailExpand', [
        state('collapsed, void', style({height: '0px', minHeight: '0', display: 'none'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ])
    ]
})

export class EmpresasComponent implements OnInit {

  /*=============================================
	Variable para nombrar las columnas de nuestra Tabla en Angular Material
	=============================================*/
  displayedColumns: string[] = ['position', 'displayName', 'actions'];

  /*=============================================
	Variable global que instancie la data que aparecera en la Tabla
	=============================================*/

  dataSource!:MatTableDataSource<Iempresa>;

	/*=============================================
	Variable global que tipifica la interfaz de usuario
	=============================================*/
  empresas:Iempresa[] = [];

  	/*=============================================
	Variable global que informa a la vista cuando hay una expansion de la tabla
	=============================================*/
  expandedElement!: Iempresa | null;

  	/*=============================================
	Variable global que informa a la vista cuando hay una expansion de la tabla
	=============================================*/

  path = environment.urlFiles ;

    /*=========================================
	   Variable para definir tamaño de pantalla
	  ===========================================*/

    screenSizeSM = false;

    /*=========================================
	   Variable para definir tamaño de pantalla
	  ===========================================*/
    loadData=false;

    /*=========================================
	   Paginacion y Orden
	  ===========================================*/

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

  constructor(private empresasService:EmpresasService) { }

  ngOnInit(): void {

    this.getData();

    /*=============================================
	   Definir tamano de Pantallas
	  =============================================*/

    if (functions.screenSize(0,767)){

      this.screenSizeSM = true

    }else {

      //  this.displayedColumns.push('adress');

        this.screenSizeSM = false
        this.displayedColumns.splice(2,0, 'rfc');
        this.displayedColumns.splice(3,0, 'address');
        this.displayedColumns.splice(4,0,'city');

    }

  }

	/*=============================================
	Funcion para tomar la data de usuarios
	=============================================*/

     getData(){

          this.empresasService.getData().subscribe((resp:any)=>{
          this.loadData = true ;

            /*=============================================
          	Integrando la respuesta de base de dacion para tomar la data de usuarios
          	=============================================*/

            let position = 1;

             this.empresas = Object.keys(resp).map(a=> ({

              idemp: resp[a].idemp ++,
              position: position ++,
              address:resp[a].address,
              city:resp[a].city,
              country:resp[a].country,
              country_code:resp[a].country_code,
              displayName:resp[a].displayName,
              email:resp[a].email,
              method:resp[a].method,
              phone:resp[a].phone,
              picture:resp[a].picture,
              rfc:resp[a].rfc,
              smallname:resp[a].smallname,
              username:resp[a].username,
              wishlist:resp[a].wishlist

          } as Iempresa)) ;

          this.dataSource = new MatTableDataSource(this.empresas);

          this.dataSource.paginator = this.paginator ;
          this.dataSource.sort      = this.sort ;

          this.loadData = false ;
    })
 }


/**---------------------
 * Filtro de Busqueda
 -----------------------*/

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
  }
}


}
