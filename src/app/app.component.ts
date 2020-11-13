import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'ng10-personal-space';
  constructor(private router: Router) {

  }
  navigateTo(pageName) {
    //this.router.navigate(['articles', article.id]);//2e param: dynamique.
    this.router.navigate([pageName]);
  }
}
