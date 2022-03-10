import { Produto } from './../Objetos/Produto';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pessoa } from './../Objetos/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
private readonly API = `${environment.API}pessoa`
  constructor(private $http : HttpClient ) { }


  listar(){

    return this.$http.get<Pessoa[]>(`${this.API}`)
  }

  excluirItem(id:any){

    return this.$http.delete(`${this.API}/${id}`)

  }
  
  adicionarItem(prod: Produto){
    return this.$http.post(this.API, prod)
  }

  alterar(prod: Produto){

    return this.$http.put(`${this.API}`,prod)

  }

  buscarItemPorId(id:any){
    return this.$http.get<Produto>(`${this.API}/${id}`)
  }
}
