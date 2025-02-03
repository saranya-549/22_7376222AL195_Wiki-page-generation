import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFacultyComponent } from './details-faculty.component';

describe('DetailsFacultyComponent', () => {
  let component: DetailsFacultyComponent;
  let fixture: ComponentFixture<DetailsFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
