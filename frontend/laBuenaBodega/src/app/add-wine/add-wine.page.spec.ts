import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWinePage } from './add-wine.page';

describe('AddWinePage', () => {
  let component: AddWinePage;
  let fixture: ComponentFixture<AddWinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
