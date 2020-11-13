import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {
  photo = {title: '', file: ''};

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onFileChange(event) {
    console.log(event);
    console.log(event.target.files[0]);//Fichier.
    this.photo.file = event.target.files[0].name;
//    this.photo.file = event.target.files[0];
  }
  postPhoto(form) {
    console.log(form);
    console.log(this.photo);
    this.afStorage.upload('x', this.photo.file);
  }
}
