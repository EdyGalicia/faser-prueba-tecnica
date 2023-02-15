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

  public async eliminarTarea(seleccionados: Tarea[]) {
    try {
      // recorro el arreglo de tareas seleccionadas
      seleccionados.forEach((tarea) => {
        // obtengo el indice en mi arreglo de tareas de la tarea seleccionada
        let index = this.tareas.findIndex((obj) => obj.id === tarea.id);

        // Si el objeto existe, eliminarlo del array
        if (index !== -1) {
          this.tareas.splice(index, 1);
        }
      });
    } catch (error) {
      return null;
    }
  }

  public async hacerFavorito(seleccionados: Tarea[]) {
    try {
      seleccionados.forEach((tarea) => {
        let index = this.tareas.findIndex((obj) => obj.id === tarea.id);

        // Si el objeto existe, eliminarlo del array
        if (index !== -1) {
            // Si no tiene marcador de favorito al inicio, se lo agrego. Si ya lo tiene, lo quito.
          if (!this.tareas[index].titulo.startsWith("💗")) {
            this.tareas[index].titulo = "💗".concat(this.tareas[index].titulo);
          } else {
            this.tareas[index].titulo = this.tareas[index].titulo.substring(2);
          }
        }
      });
    } catch (error) {
      return null;
    }
  }
}
