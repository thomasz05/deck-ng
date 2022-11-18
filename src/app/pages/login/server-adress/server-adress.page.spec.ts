import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServerAdressPage } from './server-adress.page';
import { AuthenticationService } from "@app/services";

describe('ServerAdressPage', () => {
  let component: ServerAdressPage;
  let fixture: ComponentFixture<ServerAdressPage>;

  beforeEach(waitForAsync(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthenticationService',['isAuthenticated'])
    // boardServiceSpy.isAuthenticated.and.returnValue(true)

    TestBed.configureTestingModule({
      declarations: [ ServerAdressPage ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: AuthenticationService, useValue: authServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerAdressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
