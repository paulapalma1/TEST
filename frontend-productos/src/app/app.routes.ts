import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';


export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  {
    path: 'subir',
    loadComponent: () =>
      import('./subir-producto/subir-producto.component').then((m) => m.SubirProductoComponent),
    providers: [
        provideHttpClient(),
        importProvidersFrom(ReactiveFormsModule),
    ],
  },
 { path: '**', redirectTo: '' } 
];
