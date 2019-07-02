import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostComponentComponent } from './new-post-component.component';

describe('NewPostComponentComponent', () => {
  let component: NewPostComponentComponent;
  let fixture: ComponentFixture<NewPostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
