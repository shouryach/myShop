import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentTypePage } from './payment-type.page';

describe('PaymentTypePage', () => {
  let component: PaymentTypePage;
  let fixture: ComponentFixture<PaymentTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
