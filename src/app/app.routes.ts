import { Routes } from '@angular/router';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { ListTareas } from './modules/tareas/components/list-tareas/list-tareas';
import { CreateEditTarea } from './modules/tareas/components/create-edit-tarea/create-edit-tarea';

export const routes: Routes = [
    {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: ListTareas
      },
      {
        path: 'listar-tareas',
        component: ListTareas
      },
      {
        path: 'agregar-tarea',
        component: CreateEditTarea
      },
      {
        path:'editar-tarea/:id',
        component: CreateEditTarea
      }
    ]
  }
];
