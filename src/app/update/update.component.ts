import { Component, OnInit } from '@angular/core';
import { VagasModel } from '../models/Vagas.model';
import { SearchVagasAPIService } from '../search-vagas-api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

// ATRIBUTO PARA O ARRAY - INICIA VAZIO
public vagas: VagasModel[] = [];
public vaga: VagasModel = new VagasModel(0,"","","",0,0,"","","");

constructor(private _searchVagasAPIService: SearchVagasAPIService) { }

ngOnInit(): void {
}

updateVaga(id: number){
  this._searchVagasAPIService.atualizarVaga(id,this.vaga).subscribe(
    vaga => {this.vaga = new VagasModel(0,"","","",0,0,"","","")},
    err => {console.log("erro ao atualizar")}
  );
  window.location.href = "/painel";

}
}
