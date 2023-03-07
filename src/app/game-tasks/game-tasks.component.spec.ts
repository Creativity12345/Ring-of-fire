import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTasksComponent } from './game-tasks.component';

describe('GameTasksComponent', () => {
  let component: GameTasksComponent;
  let fixture: ComponentFixture<GameTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
