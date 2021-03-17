import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrypointContentComponent } from './entrypoint-content.component';

describe('EntrypointContentComponent', () => {
  let component: EntrypointContentComponent;
  let fixture: ComponentFixture<EntrypointContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrypointContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrypointContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
