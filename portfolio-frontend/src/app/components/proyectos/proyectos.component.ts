import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projectsList:any;

  constructor( private portfolioData:PortfolioService) { }

  ngOnInit(): void {

    this.portfolioData.fetchData().subscribe( data =>{
      console.log("1"+JSON.stringify(data));

      this.projectsList = Object.entries(data.projects);
      console.log(this.projectsList);
     
      
  });

  }     

}
