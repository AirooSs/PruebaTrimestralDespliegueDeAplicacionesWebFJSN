import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService, Serie } from '../../services/series.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  listado: Serie[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getListado().subscribe(data => {
      this.listado = data;
    });
  }
}