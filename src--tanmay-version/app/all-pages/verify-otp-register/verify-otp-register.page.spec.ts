import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyOtpRegisterPage } from './verify-otp-register.page';

describe('VerifyOtpRegisterPage', () => {
  let component: VerifyOtpRegisterPage;
  let fixture: ComponentFixture<VerifyOtpRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyOtpRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyOtpRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
