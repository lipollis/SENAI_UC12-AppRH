import { Component, OnInit } from '@angular/core';
import { VagasModel } from '../models/Vagas.model';
import { SearchVagasAPIService } from '../search-vagas-api.service';

@Component({
  selector: 'app-editar-vagas',
  templateUrl: './editar-vagas.component.html',
  styleUrls: ['./editar-vagas.component.css']
})
export class EditarVagasComponent implements OnInit {

  // ATRIBUTO PARA O ARRAY - INICIA VAZIO
  public vagas: VagasModel[] = [];
  public vaga: VagasModel = new VagasModel(0,"","","",0,0,"","","");

  constructor(private _searchVagasAPI: SearchVagasAPIService) { }

  ngOnInit(): void {
  }

  atualizar(id: number){
    this._searchVagasAPI.atualizarVaga(id,this.vaga).subscribe(
      vaga => {this.vaga = new VagasModel(0,"","","",0,0,"","","")},
      err => {console.log("erro ao atualizar")}
    );
    window.location.href = "/painel";

  }

  excluir(id: number){
    this._searchVagasAPI.removerVaga(id).subscribe(
      vaga => {this.vaga = new VagasModel(0,"","","",0,0,"","","")},
      err => {console.log("erro ao Excluir")}
    );
    window.location.href = "/painel";

  }

}
