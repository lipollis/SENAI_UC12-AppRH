import { Component, OnInit } from '@angular/core';
import { VagasModel } from '../models/Vagas.model';
import { SearchVagasAPIService } from '../search-vagas-api.service';

@Component({
  selector: 'app-cadastrar-vagas',
  templateUrl: './cadastrar-vagas.component.html',
  styleUrls: ['./cadastrar-vagas.component.css']
})
export class CadastrarVagasComponent implements OnInit {

  // ATRIBUTO PARA O ARRAY - UTILIZADO PARA O USO DOS MÉTODOS CADASTRAR, ATUALIZAR E DELETAR
  public vaga: VagasModel = new VagasModel(0,"","","",0,0,"","","");
  public vagas: VagasModel[] = [];

  constructor(private _searchVagasAPIService: SearchVagasAPIService) { }

  ngOnInit(): void {
    this.carregaVagas();
  }

  cadastrar(){
    this._searchVagasAPIService.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new VagasModel(0,"","","",0,0,"","","")},
      err => {console.log("Erro ao cadastrar.")}
    );
    window.location.href = "/painel"
  }


  // MÉTODO QUE SERÁ INICIALIZADO QUANDO SOLICITADO O PAINEL
  // NECESSÁRIO USAR TODOS OS ITENS DO CONTRUTOR DO MODELS
  // PQ SERÃO AS INFORMAÇÕES GUARDADAS NO VETOR MAP E 
  // ESTÃO ARMAZENADAS NO JSON
  carregaVagas(){
    this._searchVagasAPIService.getVagas()
      .subscribe(
        recuperaVaga => {
          this.vagas = recuperaVaga.map(item => {
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
}
