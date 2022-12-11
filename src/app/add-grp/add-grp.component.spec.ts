import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpComponent } from './add-grp.component';

describe('AddGrpComponent', () => {
  let component: AddGrpComponent;
  let fixture: ComponentFixture<AddGrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
