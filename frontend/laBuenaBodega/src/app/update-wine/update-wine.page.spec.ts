import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateWinePage } from './update-wine.page';

describe('UpdateWinePage', () => {
  let component: UpdateWinePage;
  let fixture: ComponentFixture<UpdateWinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateWinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
