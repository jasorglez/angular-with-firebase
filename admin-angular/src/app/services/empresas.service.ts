import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }

	/*=============================================
	Tomar la data de la colección Empresas en Firebase
	=============================================*/

    getData(){

        return this.http.get(`${environment.urlFirebase}empresas.json`);

    }

  }

