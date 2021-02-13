import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourOrdersContentComponent } from './your-orders-content.component';

describe('YourOrdersContentComponent', () => {
  let component: YourOrdersContentComponent;
  let fixture: ComponentFixture<YourOrdersContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourOrdersContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourOrdersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
