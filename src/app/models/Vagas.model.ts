export class VagasModel {
    idvaga: number = 1000;
    descricao: string = "";
    req_obrigatorios: string = "";
    req_desejaveis: string = "";
    remuneracao: number = 0;
    aberta: number = 0;
    beneficios: string = "";
    local_trabalho: string = "";
    foto: String = "";

    constructor(idvaga: number, 
        descricao: string, 
        req_obrigatorios: string, 
        req_desejaveis: string, 
        remuneracao: number, 
        aberta: number, 
        beneficios: string, 
        local_trabalho: string, 
        foto: String){

        this.idvaga = idvaga;
        this.descricao = descricao;
        this.req_obrigatorios = req_obrigatorios;
        this.req_desejaveis = req_desejaveis;
        this.remuneracao = remuneracao;
        this.aberta = aberta;
        this.beneficios = beneficios;
        this.local_trabalho = local_trabalho;
        this.foto = foto;
    }
}