import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploArrayProvidersComponent } from './ejemplo-array-providers.component';

describe('EjemploArrayProvidersComponent', () => {
  let component: EjemploArrayProvidersComponent;
  let fixture: ComponentFixture<EjemploArrayProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploArrayProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploArrayProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
