import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditTarea } from './create-edit-tarea';

describe('CreateEditTarea', () => {
  let component: CreateEditTarea;
  let fixture: ComponentFixture<CreateEditTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
