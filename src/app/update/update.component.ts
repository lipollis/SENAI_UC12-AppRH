import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

constructor(private _searchVagasAPIService: SearchVagasAPIService,
  private route: ActivatedRoute,
  private router: Router) { }

    // CONTROLE DOS DADOS DO FORMULÁRIO
    updateVagas = new FormGroup({
      descricao: new FormControl(''),
      req_obrigatorios: new FormControl(''),
      req_desejaveis: new FormControl(''),
      remuneracao: new FormControl(''),
      aberta: new FormControl(''),
      beneficios: new FormControl(''),
      local_trabalho: new FormControl(''),
      foto: new FormControl('')
    })

ngOnInit(): void {
  this._searchVagasAPIService.getById(this.route.snapshot.params['id'])
  .subscribe(
    (vagaMsg: any) => {
      this.updateVagas = new FormGroup({
        descricao: new FormControl(vagaMsg['descricao']),
        req_obrigatorios: new FormControl(vagaMsg['req_obrigatorios']),
        req_desejaveis: new FormControl(vagaMsg['req_desejaveis']),
        remuneracao: new FormControl(vagaMsg['remuneracao']),
        aberta: new FormControl(vagaMsg['aberta']),
        beneficios: new FormControl(vagaMsg['beneficios']),
        local_trabalho: new FormControl(vagaMsg['local_trabalho']),
        foto: new FormControl(vagaMsg['foto'])
      })
    }
  );
}

updateVaga(){
  this._searchVagasAPIService.atualizarVaga(this.route.snapshot.params['id'], this.updateVagas.value)
      .subscribe(
        vagaMsg => {
          window.location.href = "/painel";}
      )
  }

}
