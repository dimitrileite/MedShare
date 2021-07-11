import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderListService {
  private BASE_URL = env.API_URL;

  providers$: Observable<Provider[]>;

  constructor(private http: HttpClient) {}

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.BASE_URL}/api/providers`);
  }

  addProvider(
    name: string,
    specialty: string,
    description: string,
    documentation: string,
    whatsapp?: string,
    instagram?: string
  ): Observable<Provider> {
    return this.http.post<Provider>(`${this.BASE_URL}/api/providers`, {
      name,
      specialty,
      description,
      whatsapp,
      instagram,
      documentation
    });
  }

  deleteProvider(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/providers/${id}`);
  }
}

export interface Provider {
  _id: string;
  name: string;
  specialty: string;
  description: string;
  documentation: string;
  whatsapp?: string;
  instagram?: string;
  createdAt: string;
  updatedAt: string;
}
