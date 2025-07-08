import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingoDos } from './pingo-dos';

describe('PingoDos', () => {
  let component: PingoDos;
  let fixture: ComponentFixture<PingoDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PingoDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PingoDos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
