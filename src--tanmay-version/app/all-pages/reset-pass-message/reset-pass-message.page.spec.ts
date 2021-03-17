import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetPassMessagePage } from './reset-pass-message.page';

describe('ResetPassMessagePage', () => {
  let component: ResetPassMessagePage;
  let fixture: ComponentFixture<ResetPassMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPassMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPassMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
