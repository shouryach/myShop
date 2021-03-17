import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectUserAddressPage } from './select-user-address.page';

describe('SelectUserAddressPage', () => {
  let component: SelectUserAddressPage;
  let fixture: ComponentFixture<SelectUserAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUserAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectUserAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
