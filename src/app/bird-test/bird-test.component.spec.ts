import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdTestComponent } from './bird-test.component';

describe('BirdTestComponent', () => {
  let component: BirdTestComponent;
  let fixture: ComponentFixture<BirdTestComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ BirdTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
