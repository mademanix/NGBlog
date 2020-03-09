import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveContentComponent } from './remove-content.component';

describe('CmsRemoveContentComponent', () => {
  let component: RemoveContentComponent;
  let fixture: ComponentFixture<RemoveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
