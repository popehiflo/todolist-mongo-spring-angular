import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http:HttpClient) {

  }

  create(tarea: any) {
    return this.http.post(`${API_BASE}/tareas`, tarea);
  }

  readAll() {
    return this.http.get(`${API_BASE}/tareas`);
  }

  update(id: string, tarea: any) {
    return this.http.put(`${API_BASE}/tareas/${id}`, tarea);
  }

  delete(id: string) {
    return this.http.delete(`${API_BASE}/tareas/${id}`);
  }
}
