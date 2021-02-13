import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourFinancePage } from './your-finance.page';

describe('YourFinancePage', () => {
  let component: YourFinancePage;
  let fixture: ComponentFixture<YourFinancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFinancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourFinancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
