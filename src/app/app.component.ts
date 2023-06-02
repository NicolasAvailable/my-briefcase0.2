import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  dark: boolean = false;

  ngOnInit(): void {
  }

  darkMode( data: boolean ){
    this.dark = data;
  }
  

}
