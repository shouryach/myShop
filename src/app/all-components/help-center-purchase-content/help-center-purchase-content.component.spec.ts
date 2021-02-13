import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpCenterPurchaseContentComponent } from './help-center-purchase-content.component';

describe('HelpCenterPurchaseContentComponent', () => {
  let component: HelpCenterPurchaseContentComponent;
  let fixture: ComponentFixture<HelpCenterPurchaseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCenterPurchaseContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpCenterPurchaseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
