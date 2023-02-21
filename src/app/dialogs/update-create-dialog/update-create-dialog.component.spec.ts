import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCreateDialogComponent } from './update-create-dialog.component';

describe('UpdateCreateDialogComponent', () => {
  let component: UpdateCreateDialogComponent;
  let fixture: ComponentFixture<UpdateCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
