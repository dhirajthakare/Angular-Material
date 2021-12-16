import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExmapleComponent } from './dialog-exmaple.component';

describe('DialogExmapleComponent', () => {
  let component: DialogExmapleComponent;
  let fixture: ComponentFixture<DialogExmapleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExmapleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExmapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
