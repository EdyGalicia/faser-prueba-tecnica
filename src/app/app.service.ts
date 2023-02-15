import { Injectable } from "@angular/core";
import { Tarea } from "./tarea";

@Injectable()
export class AppService {
  constructor() {}

  public tareas: Tarea[] = [];
  private total: number;

  public async obtenerTareas() {
    try {
      // var tareas: Tarea[] = [];
      this.tareas.push(new Tarea(1, "Sacar a pasear al perro", 15));
      this.tareas.push(new Tarea(2, "Sacar la basura", 5));
      this.tareas.push(new Tarea(3, "Cocinar la cena", 30));
      this.tareas.push(new Tarea(4, "Lavar la ropa", 50));
      this.tareas.push(new Tarea(5, "Regar las plantas", 20));
      return this.tareas;
    } catch (error) {
      return null;
    }
  }

  public async agregarTarea(titulo: string, minutos: number) {
    try {
      // agrego la tarea al arreglo y aumento el indice
      this.tareas.push(new Tarea(this.total, titulo, minutos));
      this.total++;
    } catch (error) {
      return null;
    }
  }

  public actualizar(tareas: Tarea[]) {
    this.tareas = tareas;
  }

  
}
