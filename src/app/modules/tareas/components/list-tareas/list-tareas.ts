import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { ITarea } from '../../interfaces/itarea';
import { TareaService } from '../../services/tarea-service';
import { ConfirmDialog } from '../../../../shared/components/confirm-dialog/confirm-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

const MATERIAL_MODULES = [
  MatTableModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
];

@Component({
  selector: 'app-list-tareas',
  imports: [MATERIAL_MODULES, RouterLink],
  templateUrl: './list-tareas.html',
  styleUrl: './list-tareas.scss',
})
export class ListTareas {
  tareas: ITarea[] = [];
  columnsTareas: string[] = [
    'id',
    'titulo',
    'descripcion',
    'estado',
    'acciones',
  ];
  private readonly _tareasSvc = inject(TareaService);

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getAllTareas();
  }

  getAllTareas() {
    this._tareasSvc.getTareasSvc().subscribe((resp) => {
      this.tareas = resp;
    });
  }

  deleteTarea(id: number) {
    const confirmado = confirm('¿Estás seguro de eliminar esta tarea?');
    if (confirmado) {
      this._tareasSvc.deleteTareaSvc(id).subscribe({
        next: (resp: any) => {
          this.snackBar.open(resp.mensaje, 'Cerrar', { duration: 3000 });
          this.getAllTareas();
        },
        error: (err) => {
          this.snackBar.open(
            err.error?.mensaje || 'Error al eliminar la tarea',
            'Cerrar',
            { duration: 3000 }
          );
        },
      });
    }
  }
}
