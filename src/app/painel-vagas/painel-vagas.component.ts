import { Component, OnInit } from '@angular/core';
import { VagasModel } from '../models/Vagas.model';
import { SearchVagasAPIService } from '../search-vagas-api.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  // ATRIBUTO PARA O ARRAY - INICIA VAZIO
  public vagas: VagasModel[] = [];

  constructor(private _searchVagasAPIService: SearchVagasAPIService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  // MÉTODO QUE SERÁ INICIALIZADO QUANDO SOLICITADO O PAINEL
  listarVagas(){
    this._searchVagasAPIService.getVagas()
      .subscribe
  }
}
