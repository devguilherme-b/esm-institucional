import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPartnersComponent } from './my-partners.component';

describe('MyPartnersComponent', () => {
  let component: MyPartnersComponent;
  let fixture: ComponentFixture<MyPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
