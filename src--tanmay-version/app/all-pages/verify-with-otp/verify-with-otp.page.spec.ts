import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyWithOtpPage } from './verify-with-otp.page';

describe('VerifyWithOtpPage', () => {
  let component: VerifyWithOtpPage;
  let fixture: ComponentFixture<VerifyWithOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyWithOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyWithOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
