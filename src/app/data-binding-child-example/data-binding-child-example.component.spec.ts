import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingChildExampleComponent } from './data-binding-child-example.component';

describe('DataBindingChildExampleComponent', () => {
  let component: DataBindingChildExampleComponent;
  let fixture: ComponentFixture<DataBindingChildExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingChildExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
