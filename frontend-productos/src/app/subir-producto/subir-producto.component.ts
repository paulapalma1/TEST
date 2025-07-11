import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-subir-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subir-producto.component.html',
  styleUrls: ['./subir-producto.component.css'] 
})
export class SubirProductoComponent {
  productoForm: FormGroup;

   constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      valor: ['', [Validators.required]],
      imagen: [null, Validators.required],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.productoForm.patchValue({
        imagen: event.target.files[0],
      });
    }
  }

  onSubmit() {
    console.log('Submit disparado');
    if (this.productoForm.invalid) {
      console.log('Formulario inválido');
      return;
    }
    const formData = new FormData();
    formData.append('nombre', this.productoForm.get('nombre')?.value);
    formData.append('fecha', this.productoForm.get('fecha')?.value);
    formData.append('valor', this.productoForm.get('valor')?.value);

    const imagenFile = this.productoForm.get('imagen')?.value;
    if (imagenFile) {
      formData.append('imagen', imagenFile);
    }

   for (const pair of formData.entries()) {
    console.log(`${pair[0]}:`, pair[1]);
   }

this.http.post('http://localhost:8080/api/productos/', formData).subscribe({
  next: (res) => {
    console.log('Producto subido', res);
  },
  error: (err) => {
    console.error('Error al subir', err);
  }
});
} 
}