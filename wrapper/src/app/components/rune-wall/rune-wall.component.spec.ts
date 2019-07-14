import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneWallComponent } from './rune-wall.component';

describe('RuneWallComponent', () => {
  let component: RuneWallComponent;
  let fixture: ComponentFixture<RuneWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuneWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
