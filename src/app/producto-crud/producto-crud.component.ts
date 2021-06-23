import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../classes/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-crud',
  templateUrl: './producto-crud.component.html',
  styleUrls: ['./producto-crud.component.css']
})
export class ProductoCrudComponent implements OnInit {
  columnas = [
    '',
    'nombre',
    'codigo',
    'descripcion',
    'precioVenta',
    'precioCosto',
    'stock'
  ]
  sku = "";
  showTrash = false;
  productos: Producto[] = []
  backup: Producto[] = [];
  constructor(private _productoService: ProductoService,private _router: Router) { }

  ngOnInit(): void {
    this._productoService.getAll().subscribe(response =>{
      this.productos = response;
      console.log(this.productos)
      this.backup = this.productos;
    })
  }

  updateProducto(producto:Producto){
    this._router.navigate(["/add-producto",producto.id])
  }

  deleteProducto(id: number){
    this._productoService.eliminarProducto(id).subscribe((response:any)=>{
      console.log(response)
      const newItems = this.productos.filter((item:any)=>{
        return item.id !== id
      });
      this.productos = newItems;
    })
  }
  filtrar(){

    if(this.sku.length > 0){
      let filteredProducts = this.productos.filter(producto =>{
        return producto.codigo.toLowerCase() === this.sku.toLowerCase();
      });
      this.productos = filteredProducts;
    };
       }

       handle(){
        this.showTrash = true;
      };

      limpiar(){
        this.showTrash = false;
        this.sku = "";
        this.productos = this.backup
      }
 

}
