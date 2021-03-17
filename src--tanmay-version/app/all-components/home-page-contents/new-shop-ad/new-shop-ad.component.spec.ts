import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewShopAdComponent } from './new-shop-ad.component';

describe('NewShopAdComponent', () => {
  let component: NewShopAdComponent;
  let fixture: ComponentFixture<NewShopAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShopAdComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewShopAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
