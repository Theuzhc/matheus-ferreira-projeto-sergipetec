import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuintesFormComponent } from './contribuintes-form.component';

describe('ContribuintesFormComponent', () => {
  let component: ContribuintesFormComponent;
  let fixture: ComponentFixture<ContribuintesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribuintesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribuintesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
