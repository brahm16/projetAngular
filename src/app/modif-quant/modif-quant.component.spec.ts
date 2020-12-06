import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifQuantComponent } from './modif-quant.component';

describe('ModifQuantComponent', () => {
  let component: ModifQuantComponent;
  let fixture: ComponentFixture<ModifQuantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifQuantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifQuantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
