import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  loading = false;
  msg = '';
  error = '';

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    channel: new FormControl('', [
      Validators.required
    ]),
    rating: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(10)
    ]),
  });

  constructor(private seriesService: SeriesService, private router: Router) { }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.msg = '';
    this.error = '';

    const payload = {
      title: this.form.value.title!,
      channel: this.form.value.channel!,
      rating: Number(this.form.value.rating!)
    };

    this.seriesService.create(payload).subscribe({
      next: (resp) => {
        alert(`Serie creada correctamente.\nID devuelto: ${resp.id}`);
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Error al crear la serie');
        this.loading = false;
      }
    });

  };
}
