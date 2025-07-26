import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredencialModel } from '../model/credencial-model';

@Injectable({
  providedIn: 'root',
})
export class CredencialService {

  private readonly URL: string = "http://localhost:8080/defensium/credencial";

  private readonly httpClient = inject(HttpClient);

  public create(credencialModel: CredencialModel): Observable<CredencialModel> {
    return this.httpClient.post<CredencialModel>(this.URL, credencialModel);
  }

}
