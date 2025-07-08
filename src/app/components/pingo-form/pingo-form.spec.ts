import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingoForm } from './pingo-form';

describe('PingoForm', () => {
  let component: PingoForm;
  let fixture: ComponentFixture<PingoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PingoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PingoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
