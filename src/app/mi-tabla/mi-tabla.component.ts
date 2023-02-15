import { Component, Input, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AppService } from '../app.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-mi-tabla',
  templateUrl: './mi-tabla.component.html',
  styleUrls: ['./mi-tabla.component.scss']
})
export class MiTablaComponent implements OnInit {

  titulo: string;
  minutos: number;

  @Input() tareas: Tarea[];
  selected : Tarea[] = [];

  ColumnMode = ColumnMode;

  // ChangeDetectorRef
  constructor(public service: AppService) { }

  ngOnInit() {
  }

  async onSubmit() {
    if (this.titulo != null && this.minutos != null) {
      this.service.agregarTarea(this.titulo, this.minutos);
  
      this.tareas = [...this.tareas];
      this.service.actualizar(this.tareas);

      // limpio los campos
      this.titulo = null;
      this.minutos = null;
    }else{
      alert("Complete los campos de la tarea");
    }
  }

}
