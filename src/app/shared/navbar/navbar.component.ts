import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() darkModeAct: EventEmitter<boolean> = new EventEmitter()
  dark: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  modeDark(){
    // if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.toggle('dark')
      // console.log(document.documentElement.classList.value === 'dark');
    // } else {
      // document.documentElement.classList.remove('dark')
      // }
      this.dark = !this.dark
    this.darkModeAct.emit(this.dark)
  }

}
