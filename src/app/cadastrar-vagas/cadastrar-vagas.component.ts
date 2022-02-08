import { Component, OnInit } from '@angular/core';
import { VagasModel } from '../models/Vagas.model';
import { SearchVagasAPIService } from '../search-vagas-api.service';

@Component({
  selector: 'app-cadastrar-vagas',
  templateUrl: './cadastrar-vagas.component.html',
  styleUrls: ['./cadastrar-vagas.component.css']
})
export class CadastrarVagasComponent implements OnInit {

  // ATRIBUTO PARA O ARRAY - INICIA VAZIO
  public vagas: VagasModel[] = [];
  public vaga: VagasModel = new VagasModel(0,"","","",0,0,"","","");

  constructor(private _searchVagasAPI: SearchVagasAPIService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._searchVagasAPI.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new VagasModel(0,"","","",0,0,"","","")},
      err => {console.log("erro ao cadastrar")}
    );
    window.location.href = "/painel";
  }

}
