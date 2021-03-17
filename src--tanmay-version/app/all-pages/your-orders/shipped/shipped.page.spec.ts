import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShippedPage } from './shipped.page';

describe('ShippedPage', () => {
  let component: ShippedPage;
  let fixture: ComponentFixture<ShippedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShippedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
