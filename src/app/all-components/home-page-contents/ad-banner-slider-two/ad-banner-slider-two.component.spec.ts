import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdBannerSliderTwoComponent } from './ad-banner-slider-two.component';

describe('AdBannerSliderTwoComponent', () => {
  let component: AdBannerSliderTwoComponent;
  let fixture: ComponentFixture<AdBannerSliderTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBannerSliderTwoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdBannerSliderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
