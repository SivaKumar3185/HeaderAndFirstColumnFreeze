import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnFreezeComponent } from './column-freeze.component';

describe('ColumnFreezeComponent', () => {
  let component: ColumnFreezeComponent;
  let fixture: ComponentFixture<ColumnFreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnFreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnFreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
