import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaModel } from '../model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly URL: string = "http://192.168.1.13:8765/defensium/pessoa";

  private readonly httpClient = inject(HttpClient);

  public findAll(): Observable<PessoaModel[]> {
    return this.httpClient.get<PessoaModel[]>(this.URL);
  }

}
