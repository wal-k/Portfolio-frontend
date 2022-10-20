import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    // animation triggers go here
  ]
})

export class HeaderComponent implements OnInit {

  headerData:any;


  constructor( private portfolioData:PortfolioService) { }

  ngOnInit(): void {

    this.portfolioData.fetchData().subscribe( data =>{
      console.log("3"+JSON.stringify(data));

      this.headerData = data.header;
      console.log("4"+JSON.stringify(this.headerData));

  });

  }                                

}
