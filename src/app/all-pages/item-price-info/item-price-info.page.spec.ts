import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemPriceInfoPage } from './item-price-info.page';

describe('ItemPriceInfoPage', () => {
  let component: ItemPriceInfoPage;
  let fixture: ComponentFixture<ItemPriceInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPriceInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemPriceInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
