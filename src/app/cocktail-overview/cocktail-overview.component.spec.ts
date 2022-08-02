import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailOverviewComponent } from './cocktail-overview.component';

describe('CocktailOverviewComponent', () => {
  let component: CocktailOverviewComponent;
  let fixture: ComponentFixture<CocktailOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
