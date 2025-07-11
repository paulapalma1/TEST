
import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from '../services/producto.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  imports: [NgIf, NgFor] 
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  error: string | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: () => this.error = 'Error al cargar productos'
    });
  }
}
