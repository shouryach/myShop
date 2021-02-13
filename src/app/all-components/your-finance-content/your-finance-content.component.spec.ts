import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourFinanceContentComponent } from './your-finance-content.component';

describe('YourFinanceContentComponent', () => {
  let component: YourFinanceContentComponent;
  let fixture: ComponentFixture<YourFinanceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFinanceContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourFinanceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
