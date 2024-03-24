import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFontComponent } from './child-font.component';

describe('ChildFontComponent', () => {
  let component: ChildFontComponent;
  let fixture: ComponentFixture<ChildFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildFontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
