import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneScapeComponent } from './rune-scape.component';

describe('RuneScapeComponent', () => {
  let component: RuneScapeComponent;
  let fixture: ComponentFixture<RuneScapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuneScapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneScapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
