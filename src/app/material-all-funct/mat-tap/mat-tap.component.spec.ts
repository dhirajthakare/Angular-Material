import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTapComponent } from './mat-tap.component';

describe('MatTapComponent', () => {
  let component: MatTapComponent;
  let fixture: ComponentFixture<MatTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
