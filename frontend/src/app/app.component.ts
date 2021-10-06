import { Component, OnInit } from '@angular/core';
import { TareaService } from './services/tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tareas: any[] = [];
  tarea = {
    id: null,
    nombre: '',
    realizada: false
  }

  constructor(private tareaService:TareaService) {

  }

  ngOnInit(): void {
    this.readAll();
  }



  createOrUpdate() {
    if (this.tarea.id) {
      this.tareaService.update(this.tarea.id!, this.tarea).subscribe(
        () => this.readAll()
      );
    } else {
      this.tareaService.create(this.tarea).subscribe(
        () => this.readAll()
      );
    }

    this.tarea = {
      id: null,
      nombre: '',
      realizada: false
    };
  }

  readAll() {
    this.tareaService.readAll().subscribe(
      (data:any) => this.tareas = data
    );
  }

  edit(tareaRecibida:any) {
    this.tarea = {
      ...tareaRecibida
    };
  }

  delete(tareaRecibida:any) {
    this.tareaService.delete(tareaRecibida.id).subscribe(
      () => this.readAll()
    );
  }

}
