import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderPriceInfoPage } from './order-price-info.page';

describe('OrderPriceInfoPage', () => {
  let component: OrderPriceInfoPage;
  let fixture: ComponentFixture<OrderPriceInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPriceInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderPriceInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
