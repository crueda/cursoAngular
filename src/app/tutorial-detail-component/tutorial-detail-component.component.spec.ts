import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetailComponentComponent } from './tutorial-detail-component.component';

describe('TutorialDetailComponentComponent', () => {
  let component: TutorialDetailComponentComponent;
  let fixture: ComponentFixture<TutorialDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
