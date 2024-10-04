import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureTaskListComponent } from './pure-task-list.component';

describe('PureTaskListComponent', () => {
  let component: PureTaskListComponent;
  let fixture: ComponentFixture<PureTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureTaskListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PureTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
