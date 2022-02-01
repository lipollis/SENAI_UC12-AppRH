import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarVagasComponent } from './cadastrar-vagas/cadastrar-vagas.component';
import { EditarVagasComponent } from './editar-vagas/editar-vagas.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: 'painel', component: PainelVagasComponent },
  { path: 'cadastrar', component: CadastrarVagasComponent },
  { path: 'editar', component: EditarVagasComponent },
  { path: 'menu', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreNosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
