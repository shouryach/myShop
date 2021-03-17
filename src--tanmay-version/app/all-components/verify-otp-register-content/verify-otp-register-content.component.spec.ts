import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyOtpRegisterContentComponent } from './verify-otp-register-content.component';

describe('VerifyOtpRegisterContentComponent', () => {
  let component: VerifyOtpRegisterContentComponent;
  let fixture: ComponentFixture<VerifyOtpRegisterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyOtpRegisterContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyOtpRegisterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
