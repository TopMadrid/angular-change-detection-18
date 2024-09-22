import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesAsincronasComponent } from './operaciones-asincronas.component';

describe('OperacionesAsincronasComponent', () => {
  let component: OperacionesAsincronasComponent;
  let fixture: ComponentFixture<OperacionesAsincronasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacionesAsincronasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionesAsincronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
