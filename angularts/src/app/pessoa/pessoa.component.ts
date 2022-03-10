import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Pessoa } from '../Objetos/Pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {


pessoas:Array<Pessoa>=[]


  constructor(
    private route :ActivatedRoute,
    private router:Router,
    private pessoaServ:PessoaService

  ) { }

  ngOnInit(): void {
this.listarPessoas();

  }

  listarPessoas() {
    this.pessoaServ.listarPessoas().subscribe(pessoas => {
      setTimeout(() => {
        this.pessoas = pessoas;
        console.log(pessoas);
        

      }, 2000);
    });
  }

  excluir = (id:any) =>{
 
    this.pessoaServ.excluir(id).subscribe(sucess =>{
      console.log('sucesso')
    
      
    })
    setTimeout(() => {
      this.ngOnInit()
    }, 1000);
    
    }
}
