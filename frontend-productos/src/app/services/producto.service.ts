import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  fecha: string;
  valor: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://127.0.0.1:8080/api/productos/';  // ← Ajusta esto si tu endpoint cambia

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
}
