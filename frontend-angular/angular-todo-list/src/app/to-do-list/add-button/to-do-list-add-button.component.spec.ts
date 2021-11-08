import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListAddButtonComponent } from './add-button.component';

describe('ToDoListAddButtonComponent', () => {
  let component: ToDoListAddButtonComponent;
  let fixture: ComponentFixture<ToDoListAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListAddButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
