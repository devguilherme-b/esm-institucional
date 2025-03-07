import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondHeaderComponent } from './my-second-header.component';

describe('MySecondHeaderComponent', () => {
  let component: MySecondHeaderComponent;
  let fixture: ComponentFixture<MySecondHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySecondHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySecondHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
