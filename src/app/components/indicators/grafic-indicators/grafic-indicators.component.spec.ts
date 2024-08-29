import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficIndicatorsComponent } from './grafic-indicators.component';

describe('GraficIndicatorsComponent', () => {
  let component: GraficIndicatorsComponent;
  let fixture: ComponentFixture<GraficIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficIndicatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
