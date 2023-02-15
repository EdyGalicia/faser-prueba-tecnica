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

  @Input() tareas: Tarea[];
  selected : Tarea[] = [];

  ColumnMode = ColumnMode;

  // ChangeDetectorRef
  constructor(public service: AppService) { }

  ngOnInit() {
  }

}
