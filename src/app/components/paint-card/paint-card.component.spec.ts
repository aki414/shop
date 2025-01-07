import { ComponentFixture, TestBed } from '@angular/core/testing';

import { paintsCardComponent } from './paint-card.component';

describe('paintsCardComponent', () => {
  let component: paintsCardComponent;
  let fixture: ComponentFixture<paintsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [paintsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(paintsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
