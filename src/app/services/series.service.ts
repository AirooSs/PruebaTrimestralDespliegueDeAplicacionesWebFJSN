import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Serie {
  title: string;
  channel: string;
  rating: number;
}

@Injectable({ providedIn: 'root' })
export class SeriesService {

  private url = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  //GET
  getListado() {
    return this.http.get<any[]>(this.url);
  }

  //POST
  create(payload: Serie) {
    return this.http.post<any>(this.url, payload);
  }
}