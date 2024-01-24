import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNavbarComponent } from './portfolio-navbar.component';

describe('PortfolioNavbarComponent', () => {
  let component: PortfolioNavbarComponent;
  let fixture: ComponentFixture<PortfolioNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
