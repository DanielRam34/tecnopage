import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;
  downloadURL?: string;
  task?: AngularFireUploadTask;
  uploadProgress$: Observable<number | undefined>; // Declaración de tipo

  constructor(private storage: AngularFireStorage) {
    this.uploadProgress$ = new Observable(); // Inicialización en el constructor
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const filePath = `images/${this.selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    this.task = this.storage.upload(filePath, this.selectedFile);
    this.uploadProgress$ = this.task.percentageChanges();

    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.downloadURL = url;
          console.log('File available at:', url);
          // Aquí podrías mostrar un mensaje de éxito, etc.
        });
      })
    ).subscribe();
  }
}
