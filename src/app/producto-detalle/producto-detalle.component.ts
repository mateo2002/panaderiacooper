import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Producto } from '../clases/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit  {
  _producto: any;
  constructor(private _activatedRoute: ActivatedRoute,private _productoService:ProductoService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(route =>{
      const id = route.get('id');

      if(id !== null){
        this._productoService.getAll().subscribe(response => {
          this._producto = response.filter(item => {
            return item.id === parseInt(id);
          })[0];
        });
      }
    });
  }

}
