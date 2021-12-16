import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAllFunctComponent } from './material-all-funct.component';

describe('MaterialAllFunctComponent', () => {
  let component: MaterialAllFunctComponent;
  let fixture: ComponentFixture<MaterialAllFunctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAllFunctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAllFunctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
