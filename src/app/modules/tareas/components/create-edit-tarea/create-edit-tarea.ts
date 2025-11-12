import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ITarea } from '../../interfaces/itarea';
import { TareaService } from '../../services/tarea-service';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialog } from '../../../../shared/components/confirm-dialog/confirm-dialog';

const MATERIAL_MODULES = [MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule,  MatDialogModule,
  MatSnackBarModule];

interface Estados {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-edit-tarea',
  imports: [MATERIAL_MODULES, ReactiveFormsModule, RouterLink],
  templateUrl: './create-edit-tarea.html',
  styleUrl: './create-edit-tarea.scss',
})
export class CreateEditTarea {
  formTarea: FormGroup;
  titulo = 'Agregar Tarea';
  tarea: ITarea | undefined;
  _tareaSvc = inject(TareaService);
  @Input('id') tareaId!: number;

  estados: Estados[] = [
    {value: 'pendiente', viewValue: 'Pendiente'},
    {value: 'en-progreso', viewValue: 'En Progreso'},
    {value: 'completada', viewValue: 'Completada'},
  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.formTarea = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
      estado: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isEdit();
  }

  isEdit() {
    if (this.tareaId != undefined) {
      this.titulo = 'Editar Tarea';
      this._tareaSvc.findTareaSvc(this.tareaId).subscribe((tarea: ITarea) => {
        this.tarea = tarea;
        this.formTarea.patchValue({
          titulo: this.tarea.titulo,
          descripcion: this.tarea.descripcion,
          estado: this.tarea.estado,
        });
      });
    }
  }

  createEditTarea() {
    if (this.tareaId == undefined) {
      this.createTarea();
    } else {
      this.editTarea();
    }
  }

  createTarea() {
    const tarea: ITarea = this.formTarea.value;

    this._tareaSvc.createTareaSvc(tarea).subscribe({
      next: () => {
        this.snackBar.open('Tarea creada exitosamente.', 'Cerrar', { duration: 3000 });
        this.router.navigate(['listar-tareas']);
      },
      error: () => this.snackBar.open('Error al crear tarea.', 'Cerrar', { duration: 3000 }),
    });
  }

  editTarea() {
    const tarea: ITarea = {
      titulo: this.formTarea.get('titulo')?.value,
      descripcion: this.formTarea.get('descripcion')?.value,
      estado: this.formTarea.get('estado')?.value,
    };
    tarea.id = this.tareaId;

    this._tareaSvc.updateTareaSvc(this.tareaId, tarea).subscribe({
      next: () => {
        this.snackBar.open('Tarea actualizada.', 'Cerrar', { duration: 3000 });
        this.router.navigate(['/listar-tareas']);
      },
      error: () => this.snackBar.open('Error al actualizar tarea.', 'Cerrar', { duration: 3000 }),
    });   
  }
}
