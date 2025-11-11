import { inject, Injectable } from '@angular/core';
import { ITarea } from '../interfaces/itarea';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  //private http = inject(HttpClient);
  private API_URL = environment.urlApi;

  constructor(private http: HttpClient) {}

  getTareasSvc(): Observable<ITarea[]> {
    return this.http.get<ITarea[]>(`${this.API_URL}/Tarea`);
  }

  findTareaSvc(id: number): Observable<ITarea> {
    return this.http.get<ITarea>(`${this.API_URL}/Tarea/${id}`);
  }

  createTareaSvc(tarea: ITarea): Observable<ITarea> {
    return this.http.post<ITarea>(`${this.API_URL}/Tarea`, tarea, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  updateTareaSvc(id: number, tarea: ITarea): Observable<ITarea> {
    return this.http.put<ITarea>(`${this.API_URL}/Tarea/${id}`, tarea);
  }

  deleteTareaSvc(id: number): Observable<ITarea> {
    return this.http.delete<ITarea>(`${this.API_URL}/Tarea/${id}`);
  }
}
