import { Component, OnInit } from '@angular/core';
import { VagasModel } from '../models/Vagas.model';
import { SearchVagasAPIService } from '../search-vagas-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // ATRIBUTO PARA O ARRAY - INICIA VAZIO
  public vagas: VagasModel[] = [];
  public vaga: VagasModel = new VagasModel(0,"","","",0,0,"","","");

  constructor(private _searchVagasAPIService: SearchVagasAPIService) { }

  ngOnInit(): void {
  }

  createVaga(){
    this._searchVagasAPIService.cadastrarVaga(this.vaga).subscribe(
      vagaMsg => {this.vaga = new VagasModel(0,"","","",0,0,"","","")}
    );
    window.location.href = "/painel";
  }

}
