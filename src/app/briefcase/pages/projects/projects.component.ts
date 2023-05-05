import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Projects } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = [
    {
      title: 'Countries',
      desc: 'Page where you can search a country by it name, capital or region. I consumed an API public for making this website',
      github: 'https://github.com/NicolasAvailable/Countries-app',
      pageLink: 'https://thecountriesbynico.netlify.app',
      img: 'https://i.imgur.com/zJDjbBy.jpg',
      technologies: 'Angular, Rxjs, Tailwind, Typescript, Scss'
    }
  ];
  work: boolean = false;

  constructor() { }



  ngOnInit(): void {
    this.work = true;
  }

}
