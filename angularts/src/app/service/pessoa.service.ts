
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pessoa } from './../Objetos/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = `${environment.API}pessoa`
  constructor(private $http : HttpClient ) { }


  listarPessoas(){

    return this.$http.get<Pessoa[]>(`${this.API}`)
  }

  excluir(id:any){

    return this.$http.delete(`${this.API}/${id}`)

  }
  
  adicionar(pessoa: Pessoa){
    return this.$http.post(this.API, pessoa)
  }

  alterar(pessoa: Pessoa){

    return this.$http.put(`${this.API}`,pessoa)

  }

  buscarItemPorId(id:any){
    return this.$http.get<Pessoa>(`${this.API}/${id}`)
  }
  
}
