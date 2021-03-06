import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvementCreateComponent } from './mouvement-create.component';

describe('MouvementCreateComponent', () => {
  let component: MouvementCreateComponent;
  let fixture: ComponentFixture<MouvementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouvementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouvementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
