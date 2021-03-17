import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShippedContentComponent } from './shipped-content.component';

describe('ShippedContentComponent', () => {
  let component: ShippedContentComponent;
  let fixture: ComponentFixture<ShippedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippedContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShippedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
