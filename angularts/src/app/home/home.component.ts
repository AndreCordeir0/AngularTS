
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private router:Router
    
    ) { }
prod :any


  ngOnInit(): void {

setTimeout(() => {
  
 this.produtoService.listar().subscribe(prods=>{

  this.prod=prods})
}, 1000);

    
    

  

  }

excluirItem = (id:any) =>{
 
this.produtoService.excluirItem(id).subscribe(sucess =>{
  console.log('sucesso')

  
})
this.ngOnInit()
}


alterar = (id:any) =>{
 
this.router.navigate(['cadastro',id])

  


}

}