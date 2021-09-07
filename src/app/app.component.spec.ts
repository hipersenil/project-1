import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactSingleComponent} from './contact-single/contact-single.component';
import {CreateContactComponent} from './create-contact/create-contact.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ContactListComponent,
        ContactSingleComponent,
        CreateContactComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'largeapp for me'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('largeapp for me');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log("AQUI "+compiled.querySelector('.content span').textContent)
    expect(compiled.querySelector('.content span').textContent).toContain('largeapp for me app is running!');
  });
});
