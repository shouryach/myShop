import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdBigComponent } from './ad-big.component';

describe('AdBigComponent', () => {
  let component: AdBigComponent;
  let fixture: ComponentFixture<AdBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBigComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
