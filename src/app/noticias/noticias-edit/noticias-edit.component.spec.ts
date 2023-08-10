import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasEditComponent } from './noticias-edit.component';

describe('NoticiasEditComponent', () => {
  let component: NoticiasEditComponent;
  let fixture: ComponentFixture<NoticiasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasEditComponent]
    });
    fixture = TestBed.createComponent(NoticiasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
