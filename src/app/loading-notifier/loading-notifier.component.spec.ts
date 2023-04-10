import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingNotifierComponent } from './loading-notifier.component';

describe('LoadingNotifierComponent', () => {
  let component: LoadingNotifierComponent;
  let fixture: ComponentFixture<LoadingNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingNotifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
