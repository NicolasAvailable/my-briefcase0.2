import { Component, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/skills.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [
    {name: 'html5', color: 'hover:text-orange-600'},
    {name: 'css3', color: 'hover:text-cyan-500'},
    {name: 'javascript', color: 'hover:text-amber-200'},
    {name: 'typescript', color: 'hover:text-sky-600'},
    {name: 'angular', color: 'hover:text-rose-600'},
    {name: 'sass', color: 'hover:text-pink-400'},
    {name: 'less', color: 'hover:text-blue-800'},
    {name: 'tailwind-css', color: 'hover:text-blue-400'},
    {name: 'bootstrap', color: 'hover:text-indigo-700'},
    {name: 'git', color: 'hover:text-orange-500'},
    {name: 'firebase', color: 'hover:text-amber-400'}
  ];
  work: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.work = true;
  }

}
