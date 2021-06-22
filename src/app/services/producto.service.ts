import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../classes/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {     //ng g s producto

  url = "http://localhost:3000/productos"
  

  constructor(private _http: HttpClient) {

   }

   getAll(){
     return this._http.get<Producto[]>(this.url);
   }

   insertarProducto(producto:Producto){
     return this._http.post(this.url,producto);
   }

   eliminarProducto(id:number){
     return this._http.delete(this.url+"/"+id);
   }

   updateProducto(producto:Producto){
     return this._http.put(this.url+"/"+producto.id,producto);
   }
}