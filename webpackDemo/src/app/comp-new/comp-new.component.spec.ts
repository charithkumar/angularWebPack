import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNewComponent } from './comp-new.component';

describe('CompNewComponent', () => {
  let component: CompNewComponent;
  let fixture: ComponentFixture<CompNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
