import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from  './home/home.component'
import { CadastroComponent } from './cadastro/cadastro.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path :'cadastro',component:CadastroComponent},
  {path :'cadastro/:id',component:CadastroComponent},
  {path:'pessoa',component:PessoaComponent},
  {path:'pessoa/:id',component:EditarPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
