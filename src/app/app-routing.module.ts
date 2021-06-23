import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './abms/usuarios/usuarios.component';
import { LoginComponent } from './shared/login/login.component';
import { ProductosComponent } from './abms/productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoCrudComponent } from './producto-crud/producto-crud.component';
import { AddProductoComponent } from './producto-crud/add-producto/add-producto.component';
import { CajaComponent } from './caja/caja.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'caja',component: CajaComponent},
  {path:'producto/:id',component:ProductoDetalleComponent},
  {path:'abm/usuarios',component:UsuariosComponent},
  {path:'abm/productos',component:ProductosComponent},
  {path:'productos',component:ProductoCrudComponent},
  {path:'add-producto/:id',component:AddProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
