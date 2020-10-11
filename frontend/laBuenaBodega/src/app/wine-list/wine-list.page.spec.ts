import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WineListPage } from './wine-list.page';

describe('WineListPage', () => {
  let component: WineListPage;
  let fixture: ComponentFixture<WineListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WineListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
