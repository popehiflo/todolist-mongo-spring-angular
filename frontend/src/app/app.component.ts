import { Component, OnInit } from '@angular/core';
import { TareaService } from './services/tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tareas: any[] = [];

  constructor(private tareaService:TareaService) {

  }

  ngOnInit(): void {
    this.tareaService.readAll()
      .subscribe((data:any) => this.tareas = data);
  }

}
