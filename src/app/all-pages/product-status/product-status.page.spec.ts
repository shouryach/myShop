import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductStatusPage } from './product-status.page';

describe('ProductStatusPage', () => {
  let component: ProductStatusPage;
  let fixture: ComponentFixture<ProductStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
