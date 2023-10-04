import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceRecogComponent } from './face-recog.component';

describe('FaceRecogComponent', () => {
  let component: FaceRecogComponent;
  let fixture: ComponentFixture<FaceRecogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaceRecogComponent]
    });
    fixture = TestBed.createComponent(FaceRecogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
