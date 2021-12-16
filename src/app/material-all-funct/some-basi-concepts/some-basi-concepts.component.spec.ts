import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeBasiConceptsComponent } from './some-basi-concepts.component';

describe('SomeBasiConceptsComponent', () => {
  let component: SomeBasiConceptsComponent;
  let fixture: ComponentFixture<SomeBasiConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeBasiConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeBasiConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
