import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { UsuariosComponent } from './abms/usuarios/usuarios.component';
import { ProductosComponent } from './abms/productos/productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoCrudComponent } from './producto-crud/producto-crud.component';
import { AddProductoComponent } from './producto-crud/add-producto/add-producto.component';
import { CajaComponent } from './caja/caja.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    ProductosComponent,
    ListaProductosComponent,
    InicioComponent,
    ProductoDetalleComponent,
    ProductoCrudComponent,
    AddProductoComponent,
    CajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
