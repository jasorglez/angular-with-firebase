import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacComponent } from './comunicac.component';

describe('ComunicacComponent', () => {
  let component: ComunicacComponent;
  let fixture: ComponentFixture<ComunicacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
