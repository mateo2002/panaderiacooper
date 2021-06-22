import { Component, OnInit } from '@angular/core';
import { Producto } from '../classes/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos:Producto[] = []
  sku = "";
  desde = 0;
  hasta = 0;
  showTrash = false;
  showJumbotron = false

  backup: Producto[] = [];
  constructor(private productoService: ProductoService) {

   }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(response => {
      console.log("Response",response)
      this.productos = response;
      this.backup = this.productos;
    })
  }

  handle(){
    this.showTrash = true;
  }

    filtrar(){

      if(this.sku.length > 0){
        let filteredProducts = this.productos.filter(producto =>{
          return producto.codigo.toLowerCase() === this.sku.toLowerCase();
        });
        this.productos = filteredProducts;
      };

      if(this.desde > 0 && this.hasta > 0){
        let filteredProducts = this.productos.filter(producto =>{
          return producto.precioVenta >= this.desde && producto.precioVenta <= this.hasta;
        });
        this.productos = filteredProducts;
    }
    }

  limpiar(){
    this.showTrash = false;
    this.sku = "",
    this.desde = 0,
    this.hasta = 0,
    this.productos = this.backup;
  }
}
