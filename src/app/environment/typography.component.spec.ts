import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { typographyComponent } from './typography.component';

describe('typographyComponent', () => {
  let component: typographyComponent;
  let fixture: ComponentFixture<typographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ typographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(typographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
