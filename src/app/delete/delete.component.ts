import { Component, OnInit } from '@angular/core';
import { VagasModel } from '../models/Vagas.model';
import { SearchVagasAPIService } from '../search-vagas-api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
// ATRIBUTO PARA O ARRAY - INICIA VAZIO
public vagas: VagasModel[] = [];
public vaga: VagasModel = new VagasModel(0,"","","",0,0,"","","");

constructor(private _searchVagasAPIService: SearchVagasAPIService) { }

ngOnInit(): void {
}

deleteVaga(id: number){
  this._searchVagasAPIService.removerVaga(id).subscribe(
    vagaMsg => {this.vaga = new VagasModel(0,"","","",0,0,"","","")}
  );
  window.location.href = "/painel";

}

}
