import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhoneComponent } from './item-phone.component';

describe('ItemPhoneComponent', () => {
  let component: ItemPhoneComponent;
  let fixture: ComponentFixture<ItemPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
