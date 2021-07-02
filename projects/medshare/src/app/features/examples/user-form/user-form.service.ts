import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForm } from './user-form.model';

import { environment as env } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  private BASE_URL = env.API_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<UserForm[]> {
    return this.http.get<UserForm[]>(`${this.BASE_URL}/api/users`);
  }

  get(_id: string): Observable<UserForm> {
    return this.http.get<UserForm>(`${this.BASE_URL}/api/users/${_id}`);
  }

  create(data: any): Observable<any> {
    console.log(data.toString());
    return this.http.post(`${this.BASE_URL}/api/users/register`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/users/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/users/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.BASE_URL);
  }

  findByTitle(title: any): Observable<UserForm[]> {
    return this.http.get<UserForm[]>(
      `${this.BASE_URL}/api/users/?title=${title}`
    );
  }
}
