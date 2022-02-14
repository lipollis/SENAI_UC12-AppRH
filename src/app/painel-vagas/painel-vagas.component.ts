import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public vaga: VagasModel = new VagasModel(0,"","","",0,0,"","","");
    
  constructor(private _searchVagasAPIService: SearchVagasAPIService,
    private route: ActivatedRoute,
    private router: Router) { }


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

atualizar(id: number){
  this._searchVagasAPIService.atualizarVaga(id,this.vaga).subscribe(
    vaga => {this.vaga = new VagasModel(0,"","","",0,0,"","","")},
    err => {console.log("erro ao atualizar")}
  );
  window.location.href = "/painel";

}

excluir(id: number){
  this._searchVagasAPIService.removerVaga(id).subscribe(
    vaga => {this.vaga = new VagasModel(0,"","","",0,0,"","","")},
    err => {console.log("erro ao Excluir")}
  );
  window.location.href = "/painel";

}

}