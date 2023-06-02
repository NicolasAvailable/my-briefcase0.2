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
    },
    {
      title: 'Apple-ecommerce',
      desc: 'This is the oficial apple products in Venezuela, you can see all our products and buy them through the cart!',
      github: 'https://github.com/NicolasAvailable/apple-ecommerce',
      pageLink: 'https://apple-ecommerce-nico.vercel.app/',
      img: 'https://i.ibb.co/X5z8QYC/apple-portada.png',
      technologies: 'Angular, Firebase, Rxjs, Tailwind, Typescript, Scss'
    }
  ];
  work: boolean = false;

  constructor() { }



  ngOnInit(): void {
    this.work = true;
  }

}
