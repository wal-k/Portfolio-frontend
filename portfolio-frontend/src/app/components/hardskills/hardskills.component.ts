import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-hardskills',
  templateUrl: './hardskills.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent implements OnInit {


  hardskillsList:any;

  constructor( private portfolioData:PortfolioService) { }

  ngOnInit(): void {

    this.portfolioData.fetchData().subscribe( data =>{
      console.log("1"+JSON.stringify(data));

      this.hardskillsList = Object.entries(data.hardskills);
      alert(this.hardskillsList);
     
      
  });

  }                                

}
