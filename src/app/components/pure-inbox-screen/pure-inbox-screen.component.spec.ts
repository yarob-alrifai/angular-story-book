import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';

describe('PureInboxScreenComponent', () => {
  let component: PureInboxScreenComponent;
  let fixture: ComponentFixture<PureInboxScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureInboxScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PureInboxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
