import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasDirectivasPersonalizadasComponent } from './pruebas-directivas-personalizadas.component';

describe('PruebasDirectivasPersonalizadasComponent', () => {
  let component: PruebasDirectivasPersonalizadasComponent;
  let fixture: ComponentFixture<PruebasDirectivasPersonalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasDirectivasPersonalizadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasDirectivasPersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
