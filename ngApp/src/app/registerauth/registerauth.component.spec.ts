import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterauthComponent } from './registerauth.component';

describe('RegisterauthComponent', () => {
  let component: RegisterauthComponent;
  let fixture: ComponentFixture<RegisterauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
