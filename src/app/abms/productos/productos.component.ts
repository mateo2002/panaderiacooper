import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/classes/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() producto:Producto = new Producto();
  qty = 0;
  cartProduct ={
    cantidad:0,
    sku:"",
    nombre:"",
    precio:0,
    imagenUrl:"",
    id:0
  }
  constructor() { }

  ngOnInit(): void {
  }

  addCart(producto:Producto){
    if (this.qty === 0) {
      alert("LA CANTIDAD DE PRODUCTOS SELECCIONADOS ES 0, INGRESE LA CANTIDAD DESEADA.");
    } else {
      this.cartProduct.id = producto.id;
      this.cartProduct.nombre = producto.nombre;
      this.cartProduct.sku = producto.codigo;
      this.cartProduct.precio = producto.precioVenta;
      this.cartProduct.imagenUrl = producto.imagenUrl;
      this.cartProduct.cantidad = this.qty;
      sessionStorage.setItem("producto"+producto.id,JSON.stringify(this.cartProduct));
      alert("EL PRODUCTO FUE INGRESADO A CAJA CORRECTAMENTE.");
    }
   
  }

  plus(){
    this.qty++;
  }

  less(){
    this.qty = this.qty > 0 ? this.qty -1 : 0;
  }

}

