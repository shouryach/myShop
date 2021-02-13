import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdNewBankDetailsContentComponent } from './ad-new-bank-details-content.component';

describe('AdNewBankDetailsContentComponent', () => {
  let component: AdNewBankDetailsContentComponent;
  let fixture: ComponentFixture<AdNewBankDetailsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdNewBankDetailsContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdNewBankDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
