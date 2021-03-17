import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdBannerSliderOneComponent } from './ad-banner-slider-one.component';

describe('AdBannerSliderOneComponent', () => {
  let component: AdBannerSliderOneComponent;
  let fixture: ComponentFixture<AdBannerSliderOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBannerSliderOneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdBannerSliderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
