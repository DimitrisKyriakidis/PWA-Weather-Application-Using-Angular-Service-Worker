import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: any;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;
  let mockSwUpdate: jasmine.SpyObj<SwUpdate>;

  beforeEach(() => {
    const snackbarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    const swUpdateSpy = jasmine.createSpyObj('SwUpdate', [
      'versionUpdates',
      'activateUpdate',
    ]);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: MatSnackBar, useValue: snackbarSpy },
        { provide: SwUpdate, useValue: swUpdateSpy },
      ],
      imports: [MatSnackBarModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mockSnackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    mockSwUpdate = TestBed.inject(SwUpdate) as jasmine.SpyObj<SwUpdate>;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open snackbar on version update and reload on action', (done) => {
    component.ngOnInit();

    (mockSnackBar.open as any).and.returnValue({
      afterDismissed: () => of({ dismissedByAction: true }),
    });
    mockSwUpdate.versionUpdates.subscribe();

    expect(mockSwUpdate.versionUpdates).toHaveBeenCalled();
    expect(mockSnackBar.open).toHaveBeenCalledWith(
      'A new version is available!',
      'Update now'
    );
    expect(mockSwUpdate.activateUpdate).toHaveBeenCalled();
    expect(location.reload).toHaveBeenCalled();
  });
});
