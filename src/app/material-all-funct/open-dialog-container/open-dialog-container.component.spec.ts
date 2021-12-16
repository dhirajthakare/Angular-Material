import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogContainerComponent } from './open-dialog-container.component';

describe('OpenDialogContainerComponent', () => {
  let component: OpenDialogContainerComponent;
  let fixture: ComponentFixture<OpenDialogContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDialogContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
