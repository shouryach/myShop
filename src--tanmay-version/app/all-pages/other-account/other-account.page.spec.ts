import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherAccountPage } from './other-account.page';

describe('OtherAccountPage', () => {
  let component: OtherAccountPage;
  let fixture: ComponentFixture<OtherAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
