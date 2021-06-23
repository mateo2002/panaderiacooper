import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/classes/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  producto: Producto = new Producto();
  constructor(private _productoService: ProductoService, private _activedRoute: ActivatedRoute) { }
  id = 0;
  ngOnInit(): void { 
      this._activedRoute.paramMap.subscribe((item:any)=>{
        this.id = item.get('id');
        if(this.id > 0){
          this._productoService.getAll().subscribe((response:Producto[])=>{
            const item = response.filter((prod:any)=>{
              return prod.id == this.id
            })[0];
            this.producto = item;
          })
        }
      })
  }

  save(event:any)
  {
    if(this.id > 0){
      this._productoService.updateProducto(this.producto).subscribe((response:any)=>{
        console.log(response);
      });
    }
    else{
      this._productoService.insertarProducto(this.producto).subscribe((response:any)=>{
        console.log(response);
        this.cleanFormData();
      });
    }

  }

  cleanFormData(){
    this.producto.codigo = "";
    this.producto.nombre ="";
    this.producto.precioCosto = 0;
    this.producto.precioVenta = 0;
    this.producto.stock=0;
    this.producto.imagenUrl = "";
    this.producto.descripcion = "";
  }

}
