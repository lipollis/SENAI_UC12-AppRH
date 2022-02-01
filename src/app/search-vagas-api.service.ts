import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VagasModel } from './models/Vagas.model';

@Injectable({
  providedIn: 'root'
})
export class SearchVagasAPIService {

  private url = "http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient) { }

  // BUSCAR OS DADOS DAS VAGAS ASSÍNCRONOS - JSON
  getVagas(): Observable<VagasModel[]>{
    return this._httpClient.get<VagasModel[]>(this.url);
  }


}
