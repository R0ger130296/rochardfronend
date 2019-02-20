import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { UserModel } from './../model/user.model';
import { RestResponse } from './../model/restResponse.model';

@Injectable()
export class CreateUserService {

  constructor(private http: HttpClient) { }

  /**
   * Metodo que valida campos obligatorios
   * @param user 
   */
  public validate(user: UserModel): boolean {
    let isValid = true;

    if (!user.nombre) {
      isValid = false;
    }
    if (!user.ci) {
      isValid = false;
    }
    if (!user.telefono) {
      isValid = false;
    }
    if (!user.direccion) {
      isValid = false;
    }
    return isValid;
  }
  public saveOrUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8089/saveOrUpdate", JSON.stringify(user));
  }
}
