import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponentComponent } from './cart.component';

describe('CartComponentComponent', () => {
  let component: CartComponentComponent;
  let fixture: ComponentFixture<CartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
