import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonGirarComponent } from './boton-girar.component';

describe('BotonGirarComponent', () => {
  let component: BotonGirarComponent;
  let fixture: ComponentFixture<BotonGirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonGirarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonGirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
