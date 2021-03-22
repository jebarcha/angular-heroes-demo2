// Arrancar json server:
// json-server --watch db.json

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = `${environment.baseUrl}/heroes`;
  private limit: number = 6;

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Heroe[]>(this.baseUrl);
  }

  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}?q=${termino}&_limit=${this.limit}`);
  }
}
