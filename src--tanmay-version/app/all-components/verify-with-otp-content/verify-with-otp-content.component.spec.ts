import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyWithOtpContentComponent } from './verify-with-otp-content.component';

describe('VerifyWithOtpContentComponent', () => {
  let component: VerifyWithOtpContentComponent;
  let fixture: ComponentFixture<VerifyWithOtpContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyWithOtpContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyWithOtpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
