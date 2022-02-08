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

  // MÉTODO PARA CADASTRAR VAGA
  cadastrarVaga(vaga: VagasModel):Observable<VagasModel[]>{
    return this._httpClient.post<VagasModel[]>(this.url,vaga);
  }

  // MÉTODO PARA ATUALIZAR VAGA
  atualizarVaga(id:any, vaga:VagasModel):Observable<VagasModel[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<VagasModel[]>(urlAtualizar,vaga)
  }

  // MÉTODO PARA DELETAR VAGA
  removerVaga(id:any):Observable<VagasModel[]>{
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<VagasModel[]>(urlDeletar);
  }

}
