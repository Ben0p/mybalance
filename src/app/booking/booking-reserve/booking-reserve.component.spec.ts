import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingReserveComponent } from './booking-reserve.component';

describe('BookingReserveComponent', () => {
  let component: BookingReserveComponent;
  let fixture: ComponentFixture<BookingReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
