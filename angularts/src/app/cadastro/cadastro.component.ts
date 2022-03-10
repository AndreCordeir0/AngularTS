
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Pessoa } from '../Objetos/Pessoa';
import { PessoaService } from '../service/pessoa.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

pessoa :Pessoa = new Pessoa()

  constructor(
    private route :ActivatedRoute,
    private router:Router,
    private pessoaServ:PessoaService
    ) { }

  ngOnInit(): void {

}

adicionar= ()=>{
  

    this.pessoaServ.adicionar(this.pessoa).subscribe(sucess =>{
      console.log('salvou')})
    this.router.navigate(['pessoa'])
  }


// alterar = ()=>{

//   this.prodServ.alterar(this.produto).subscribe(sucess =>{
//     console.log('editou')})
   
// }

}
