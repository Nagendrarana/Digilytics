import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTeacherFilterComponent } from './mat-teacher-filter.component';

describe('MatTeacherFilterComponent', () => {
  let component: MatTeacherFilterComponent;
  let fixture: ComponentFixture<MatTeacherFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTeacherFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTeacherFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
