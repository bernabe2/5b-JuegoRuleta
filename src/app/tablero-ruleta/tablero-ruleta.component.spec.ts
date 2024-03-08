import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroRuletaComponent } from './tablero-ruleta.component';

describe('TableroRuletaComponent', () => {
  let component: TableroRuletaComponent;
  let fixture: ComponentFixture<TableroRuletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroRuletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroRuletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
