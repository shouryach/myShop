import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeMonthPage } from './change-month.page';

describe('ChangeMonthPage', () => {
  let component: ChangeMonthPage;
  let fixture: ComponentFixture<ChangeMonthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMonthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeMonthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
