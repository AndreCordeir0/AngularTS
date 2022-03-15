import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Pessoa } from '../Objetos/Pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {


id:any
pessoa :Pessoa = new Pessoa()

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private pessoaServ: PessoaService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      if (parametros['id']) {
        this.id = parametros['id'];
        this.pessoaServ.buscarItemPorId(this.id).subscribe(pessoa => {
          this.pessoa = pessoa;
          
        });
      }
    });

  }
  alterar = () => {
    this.pessoaServ.alterar(this.pessoa).subscribe(sucess =>{
      console.log('deu certo');
      
    })
  
  
  }
}
