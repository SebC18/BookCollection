import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookCollection';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDnINjNxK5KfxLOItmOlNRi8c5pcpD7wMI",
      authDomain: "bookcollection-ff38f.firebaseapp.com",
      databaseURL: "https://bookcollection-ff38f.firebaseio.com",
      projectId: "bookcollection-ff38f",
      storageBucket: "bookcollection-ff38f.appspot.com",
      messagingSenderId: "926073802230",
      appId: "1:926073802230:web:7c5cab210f31048d808bd7",
      measurementId: "G-3EL3PE6FKV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
