import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosefromlistComponent } from './choosefromlist.component';

describe('ChoosefromlistComponent', () => {
  let component: ChoosefromlistComponent;
  let fixture: ComponentFixture<ChoosefromlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosefromlistComponent]
    });
    fixture = TestBed.createComponent(ChoosefromlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
