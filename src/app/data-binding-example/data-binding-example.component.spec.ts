import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExampleComponent } from './data-binding-example.component';

describe('DataBindingExampleComponent', () => {
  let component: DataBindingExampleComponent;
  let fixture: ComponentFixture<DataBindingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
