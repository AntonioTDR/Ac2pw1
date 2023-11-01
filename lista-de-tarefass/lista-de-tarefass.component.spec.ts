import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTarefassComponent } from './lista-de-tarefass.component';

describe('ListaTarefasComponent', () => {
  let component: ListaDeTarefassComponent;
  let fixture: ComponentFixture<ListaDeTarefassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeTarefassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeTarefassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});