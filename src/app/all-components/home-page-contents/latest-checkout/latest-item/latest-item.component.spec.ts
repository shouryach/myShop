import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LatestItemComponent } from './latest-item.component';

describe('LatestItemComponent', () => {
  let component: LatestItemComponent;
  let fixture: ComponentFixture<LatestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LatestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
