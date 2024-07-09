import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Importa el módulo AngularFireStorageModule si es necesario
import { UploadComponent } from './upload.component';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadComponent], // Declara el componente UploadComponent aquí si no lo has hecho ya en AppModule
      imports: [AngularFireStorageModule] // Importa los módulos necesarios, como AngularFireStorageModule
    }).compileComponents();

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
