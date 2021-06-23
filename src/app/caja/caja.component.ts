import { Component, OnInit } from '@angular/core';
import { Producto } from '../classes/producto';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  columnas = [
    '',
    'Nombre',
  'Cantidad',
  'Codigo',
  'Precio',
  ''
]

cambioDebe = 'cambio'

total = 0;
cambio = 0;
monto = 0;
  products: string[] = []
  cartProduct : any = []
  constructor() { }

  ngOnInit(): void {
    this.products = Object.keys(sessionStorage);
    this.products.forEach((el:any)  => {
      const item = sessionStorage.getItem(el);

      if (item != null) {
        let obj = JSON.parse(item);
        this.cartProduct.push(JSON.parse(item));
        this.total += obj.cantidad*obj.precio
      }

    });
  }

  handleCambio(){
    this.cambio = this.monto - this.total;
    this.cambioDebe = this.cambio >= 0 ? "cambio" : "debe";
  }

  change(event:any){
      console.log(event.target.value)
  }

  plus(producto:any){
    let temp = this.cartProduct.map((element: any)=>{
      if (element.id === producto.id){
        element.cantidad++;
        this.total += element.precio;
        return element
      }
      else{
        return element;
      }
    });
    this.cartProduct = temp;
  }
  less(producto:any){
    if(producto.cantidad === 1){
      let borrar = this.cartProduct.filter((element:any)=>{
        return element.id !== producto.id
      })
      this.total -=producto.precio
      this.cartProduct = borrar;
    }
    else{
      let temp = this.cartProduct.map((element: any)=>{
      if (element.id === producto.id){
        element.cantidad--;
          this.total -= element.precio;
          return element;
      }
      else{
        return element;
      }
    });

    this.cartProduct = temp;
    }

  }

  finalizarCompra(){
    this.cambioDebe = 'cambio'

    this.total = 0;
    this.cambio = 0;
    this.monto = 0;
    this.cartProduct = [];
    this.products.forEach((el:any)  => {
      sessionStorage.removeItem(el);
    });
    this.products = [];

  }

  deleteItem(producto: any){
      sessionStorage.removeItem("producto"+producto.id);
      const newItems = this.cartProduct.filter((item:any)=>{
        return item.id !== producto.id
      });
      this.cartProduct = newItems;

      this.total -= producto.cantidad*producto.precio;
  }

}
