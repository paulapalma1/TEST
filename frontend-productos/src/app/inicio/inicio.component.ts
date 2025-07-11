import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private router: Router) {}

  irSubir() {
    this.router.navigate(['/subir']);
  }

  irProductos() {
    this.router.navigate(['/productos']);
  }
}
