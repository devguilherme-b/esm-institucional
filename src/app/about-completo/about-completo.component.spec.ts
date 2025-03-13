import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompletoComponent } from './about-completo.component';

describe('AboutCompletoComponent', () => {
  let component: AboutCompletoComponent;
  let fixture: ComponentFixture<AboutCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
