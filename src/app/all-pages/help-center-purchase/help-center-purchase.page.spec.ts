import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpCenterPurchasePage } from './help-center-purchase.page';

describe('HelpCenterPurchasePage', () => {
  let component: HelpCenterPurchasePage;
  let fixture: ComponentFixture<HelpCenterPurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCenterPurchasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpCenterPurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
