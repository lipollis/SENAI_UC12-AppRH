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
  // NECESSÁRIO USAR TODOS OS ITENS DO CONTRUTOR DO MODELS
  // PQ SERÃO AS INFORMAÇÕES GUARDADAS NO VETOR MAP E 
  // ESTÃO ARMAZENADAS NO JSON
  listarVagas(){
    this._searchVagasAPIService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(item => {
            return new VagasModel(
              item.id,
              item.descricao,
              item.req_obrigatorios,
              item.req_desejaveis,
              item.remuneracao,
              item.aberta,
              item.beneficios,
              item.local_trabalho,
              item.foto
            )
          })
        }
      )
  }

/* NO HTML FOI USADO O COMANDO "ngFor" QUE REPETE OS CARDS
CONFORME A QTDE DE VAGAS ARMAZENADAS NO JSON

PARA ISSO, TAMBÉM FOI USADO UMA NOTAÇÃO ENTRE {{}} PARA 
BUSCAR AS INFORMAÇÕES DO JSON NO SRC*/
}