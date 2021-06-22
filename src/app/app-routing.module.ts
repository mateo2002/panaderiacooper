import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './abms/usuarios/usuarios.component';
import { LoginComponent } from './shared/login/login.component';
import { ProductosComponent } from './abms/productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'abm/usuarios',component:UsuariosComponent},
  {path:'abm/productos',component:ProductosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
