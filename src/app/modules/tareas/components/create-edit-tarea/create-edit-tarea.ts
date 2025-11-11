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

const MATERIAL_MODULES = [MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule];

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formTarea = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
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
    const tarea: ITarea = {
      titulo: this.formTarea.get('titulo')?.value,
      descripcion: this.formTarea.get('descripcion')?.value,
      estado: this.formTarea.get('estado')?.value,
    };

    this._tareaSvc.createTareaSvc(tarea).subscribe((resp) => {
      this.router.navigate(['listar-tareas']);
    });
  }

  editTarea() {
    const tarea: ITarea = {
      titulo: this.formTarea.get('titulo')?.value,
      descripcion: this.formTarea.get('descripcion')?.value,
      estado: this.formTarea.get('estado')?.value,
    };
    tarea.id = this.tareaId;
    this._tareaSvc.updateTareaSvc(this.tareaId, tarea).subscribe(resp => {
      this.router.navigate(['/listar-tareas']);
    });    
  }
}
